const jwt = require('jsonwebtoken');
const secretWord = process.env.JWT_SECRET || 'secret';

const userJWT = () => {

    const payload = {
        userId: user.id,
        tokenCreationDate: new Date
    }

    const token = jwt.sign(payload, secretWord);
}

module.exports = userJWT