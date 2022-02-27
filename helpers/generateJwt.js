const jwt = require("jsonwebtoken");
require("dotenv").config();

const options = {
  expiresIn: "1h",
};

const generateJwt=(email,secret )=> {
  try {
    const payload = {email};
    const token = jwt.sign(payload,secret, options);
    return token;
  } catch (error) {
    return {message:"acessToken not generated properly"};
  }
}

module.exports = { generateJwt };