import jwt from 'jsonwebtoken'
const { select, add} = require('./dbconnection.js');
import crypto from 'crypto';

function convertToMD5(password) {
  const md5Hash = crypto.createHash('md5').update(password).digest('hex');
  return md5Hash;
}

const SECRET = process.env.JWT_SECRET

function createToken(user){
  return jwt.sign({name: user.name, email: user.email}, SECRET,{ expiresIn: '12h'})
}

function readToken(token){
  try{
    return jwt.verify(token, SECRET)
  }catch(err){
    throw new Error('Token inválido')
  }
}

export function verificaToken(token){
   return readToken(token)
}

export async function cadastro(body) {
  if (!body.name || !body.email || !body.password)
    throw new Error('Nome, email e senha são obrigatórios');

  const users = await select('users', '*', `name = '${body.name}'`);
  if (users.length > 0) throw new Error('Nome já cadastrado');

  const password = convertToMD5(body.password);
  const newUser = await add('users', {
    name: body.name,
    email: body.email,
    password: password,
  });

  const token = createToken(newUser);
  return token;
}


export async function login(body){
  if (!body.email || !body.password)
  throw new Error('email e senha são obrigatórios');
  const password =  convertToMD5(body.password);
  const users = await select('users', '*', `email = '${body.email}' AND password = '${password}'`);
  if (users.length === 0) throw new Error('Email ou senha inválidos');
  const token = createToken(users[0]);
  return token;
}


