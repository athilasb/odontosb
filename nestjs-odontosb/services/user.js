import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;
//const jwtSecret = "askldjaskldlasjdkl21324"

let users = []

function createToken(user){
  return jwt.sign({email: user.email, password: user.name}, jwtSecret)
}

function readToken(token){
  try {
    jwt.verify(token, jwtSecret);
    return true;
  } catch (err) {
    return false;
  }
}

export function verificaToken(token){
  return readToken(token);
}

export function cadastro (body){ 
  const user = users.find(({email}) => email === body.email);
  if(user) throw new Error('Email já cadastrado');
  if(!body.email || !body.password) throw new Error('Email e senha são obrigatórios');
  users.push(body);
  const token = createToken(body);
  return token;
}

export function login (body){
  const user = users.find(({email}) => email === body.email);
  if(!user) throw new Error('Email não cadastrado');
  if(body.password !== user.password) throw new Error('Senha incorreta');
  if(!body.email || !body.password) throw new Error('Email e senha são obrigatórios');
  const token = createToken(user);
  return token;

}