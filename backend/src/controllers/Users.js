const {Users} = require('../db');
const bcrypt = require("bcrypt");
const {generateJWT} = require('../../helpers/jwt');
const {URL_APP_ECOMMERCE, EMAIL} = process.env;
const {transporter} = require('../../helpers/configNodemailer');
const jwt = require('jsonwebtoken');
const { response } = require('../app');

exports.getUsers = async(req, res= response) => {
    try {
        const getUser = await Users.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
        });
        getUser.length > 0 ?
        res.status(200).json(getUser) :
        res.status(404).json('not found in db.');
    } catch (error) {
        res.json('Error: ', error);
    }
};

exports.postUsers = async(req, res = response) => {
    const {name, email, role, password, img, isVerified} = req.body;
    try {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const User = await Users.create({
            name, email, role, password: hash, profilePicture: img, isVerified
        });

        const token = await generateJWT(User.id, User.email);
        const urlConfirm = `${URL_APP_ECOMMERCE}/confirm/${token}`;

        await transporter.sendMail({
            from: `'Ishoop.com <${EMAIL}>'`,
            to: User.email,
            subject: "Confirmacion de cuenta",
            html: `<p>Por favor confirme su cuenta de Usuario <a href="${urlConfirm}">Confirmar</a></p>`
        });
        
        res.status(201).json(User);
    } catch (error) {
        res.json('Error: ', error);
    }
};

exports.confirmAccount = async(req, res = response) => {
    try {
        const {token} = req.params;
    
        let email = null;

        const payload = jwt.verify(token, process.env.SECRET_JWT_CODE);
        
        if(!payload){
            return res.status(404).json({msg: 'El token es invalido.'})
        }

        email = payload.email

        await Users.update({
            isVerified: true
        },
        {
            where: {
                email: email
            }
        });

        return res.redirect('http://localhost:3000/confirmAccount');

    } catch (error) {
        res.send('Error: ', error);
    }
};

exports.loginUsers = async(req, res = response) => {
    try {
        const {email, password} = req.body;
        
        const User = await Users.findOne({
            where: {
                email: email
            }
        });

        if(!User){
            return res.status(404).json({
                msg: 'User or Password is invalid' 
            })
        };


        const validPassword = await bcrypt.compare(password, User.password);

        if(!validPassword){
            return res.status(404).json({msg: 'User or Password is invalid'});
        };

        if(!User.isVerified){
            return res.status(404).json({msg: 'Por favor revise su email y confirme su cuenta.'})
        };

        const token = await generateJWT(User.id, User.email);

        res.status(200).json({
            id: User.id,
            email: User.email,
            role: User.role,
            isVerified: User.isVerified,
            token
        });

    } catch (error) {
        res.json('Error: ', error);
    }
};

exports.loginUserGoogle = async (req, res = response) => {
    try {
        const {email} = req.body

        const User = await Users.findOne({
            where:{
                email: email
            }
        });

        if(!User){
            return res.status(400).json({
                msg: `No existe un usuario con el email ${email}, debe registrarse.`
            })
        };

        if(!User.isVerified){
            return res.status(400).json({
                msg: `Su cuenta aún no esta activada. Por favor actívela: ${email}.`
            })
        };

        const token = await generateJWT(User.id, User.email);

        res.status(200).json({
            id: User.id,
            email: User.email,
            role: User.role,
            isVerified: User.isVerified,
            token
        });
        
    } catch (error) {
        res.json('Error: ', error);
    }
};