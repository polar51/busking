import { Jwt } from 'jsonwebtoken';

const jwt = require('jsonwebtoken');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const YOUR_SECRET_KEY = 'YoUrSeCrEtKeY';



exports.createToken = async(req, res, err) => {
  const id = await req;
  const token = jwt.sign({
    userId : id
  }, YOUR_SECRET_KEY, {
    algorithm: 'HS256',
    expiresIn: '1h',
    issuer: 'WonDaehan'
  })

  res.cookie(id, token)
};


exports.verifyToken = (req, res, err) => {
  const clientToken = req.cookies.user;
  const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);
  
  if(decoded) {
    console.log(req)
  } else {
    alert('X')
  }
}