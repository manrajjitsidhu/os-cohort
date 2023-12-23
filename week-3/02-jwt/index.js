const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod')
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameRes = emailSchema.safeParse(username);
    const passwordRes = passwordSchema.safeParse(password);
    if(!usernameRes.success || !passwordRes.success) {
        return null;
    }
   const signature = jwt.sign({
        username
    },jwtPassword)
    return signature;
}


function verifyJwt(token) {
    try {
        const verified = jwt.verify(token,jwtPassword);
            return true;
    }
        catch (err){
            return false;
        }
    }


function decodeJwt(token) {
    const decoded = jwt.decode(token)  
    if (decoded){
        return true;
    }
    return false;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
