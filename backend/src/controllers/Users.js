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
            from: `'Ecommerce.com <${EMAIL}>'`,
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

        if(User.role !== 'User'){
            return res.status(404).json({msg:'Su cuenta no es de Usuario, Por favor ingrese a su cuenta en la seccion de adminsitrador'});
        }

        if(!User.isVerified){
            return res.status(404).json({msg: 'Por favor revise su email y confirme su cuenta.'})
        };

        const token = await generateJWT(User.id, User.email);

        res.status(200).json({
            id: User.id,
            email: User.email,
            name: User.name,
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

exports.forgotPassword = async(req, res=response) =>{
    try {
        const email= req.query.email

        const User= await Users.findOne({
            where:{
                email: email
            }
        });

        if(!User){
            return res.status(400).json({
                ok: false,
                msg: `No existe un usuario con el email ${email}`
            })
        };

        const token = await generateJWT(User.id, User.email);

        const urlConfirm = `${process.env.URL_APP_ECOMMERCE_FRONT}/Reset-Password/${token}`

        await transporter.sendMail({
          from: `'Ecommerce.com <${EMAIL}>'`,
          to: User.email,
          subject: "Restablecer cuenta",
          html: `<p>Para resetear su contraseña haga click aqui <a href="${urlConfirm}">Resetear Contraseña</a></p>`
        });
       
        res.status(200).send({
            ok: true,
            msg: 'Por favor revise su email.'
         });


    } catch (error) {
        console.log(error);
    }
};

exports.resetPassword = async( req, res= response) =>{
    const {token, password}= req.body
    console.log('body:', req.body)
    try {
        const payload = jwt.verify(token,process.env.SECRET_JWT_CODE);
    
        if(!payload){
            return res.status(404).json({
                ok:false,
                msg: 'El token ha expirado o es invalido, realice nuevamente el procedimiento.'
            })
        };
        console.log('Payload:', payload);

      const email= payload.email;

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        
        await Users.update({
            password: hash,
        }, {
            where: {
                email: email,
            }
        });
    
        const  User= await Users.findOne({
            where:{
                email: email
            }
        });
 
     res.json({
        ok: true,
        User
     });

        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
};

exports.postAdmin = async(req, res = response) => {
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
            from: `'Ecommerce.com <${EMAIL}>'`,
            to: User.email,
            subject: "Confirmacion de cuenta",
            html: `<p>Por favor confirme su cuenta de Usuario <a href="${urlConfirm}">Confirmar</a></p>`
        });
        
        res.status(201).json(User);
    } catch (error) {
        res.json('Error: ', error);
    }
};

exports.loginAdmin = async(req, res = response) => {
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

        if(User.role !== 'Admin'){
            return res.status(404).json({msg:'Su cuenta no es de Administrador, Por favor ingrese a su cuenta en la seccion de Usuario'});
        }

        if(!User.isVerified){
            return res.status(404).json({msg: 'Por favor revise su email y confirme su cuenta.'})
        };

        const token = await generateJWT(User.id, User.email);

        res.status(200).json({
            id: User.id,
            email: User.email,
            name: User.name,
            profilePicture: User.profilePicture,
            role: User.role,
            isVerified: User.isVerified,
            token
        });

    } catch (error) {
        res.json('Error: ', error);
    }
};

exports.changeProfile = async (req, res = response) => {
    try {
        const {id, image} = req.body;
        const Result = await Users.update({
            profilePicture: image
        },
        {where:
            {id: id}
        });
        const newPerfil = await Users.findOne({
            where: {id: id}
        });
        Result !== undefined ? res.status(200).json({ok:true, newPerfil}) :
        res.status(404).json({ok:false, msg:'Error en cambiar foto de perfil.'})
        
    } catch (error) {
        console.log('Error:', error) 
    }
};

exports.ChangeNameAdm = async (req, res = response) => {
    try {
        const {id, name} = req.body;
        console.log('Body:', req.body);
        const user = await Users.update({
            name: name
        },
        {
            where: {id : id}
        });
        const newProfile = await Users.findOne({
            where:{id:id}
        });
        console.log('newProfile:', newProfile);
        user !== undefined ? res.status(200).json({
            ok:true,
            newProfile
        }) : res.status(404).json({ok:false, msg: 'Error al cambiar el nombre, Intentelo de nuevo.'})

    } catch (error) {
        console.log('Error:', error);
        res.json(error);
    }
};