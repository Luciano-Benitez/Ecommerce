const jwt = require('jsonwebtoken');

async function generateJWT (id, email) {
    try {
        const payload = {id, email};

        return await jwt.sign(payload, process.env.SECRET_JWT_CODE, {expiresIn: '2h'});

    } catch (error) {
        resizeBy.json('Error en el Catch.');
    };
};

module.exports = {generateJWT};