import jwt from "jsonwebtoken";
import { cookie_name } from "./constants.js";
export const createToken = (id, email, expiresIn) => {
  const payload = { id, email };
  jwt.sign(payload, process.env.jwt, { expiresIn }, (error, token) => {
    if (error) {
      console.error(error);
    } else {
      return token;
    }
  });
};

export const verifyToken = async (req, res, next) => {
  const token = req.signedCookies[`${cookie_name}`];
  if (!token || token.trim() === "") {
    return res.status(401).json({message: "Token not received"})
  }
  return new Promise() <
    Void >
    ((resolve, reject) => {
      return jwt.verify(token, process.env.jwt, (err, success) => {
        if (err) {
          reject(err.message);
          return res.status(401).json({message: "JWT"})
        } else {
          console.log("user successful")
          resolve()
          res.locals.jwtData = success
          return next()
        }
      });
    })
  ;
  console.log(token);
};
