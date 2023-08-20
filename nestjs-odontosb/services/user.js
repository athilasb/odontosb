import jwt from 'jsonwebtoken'

let users = []
const SECRET = process.env.JWT_SECRET

function createToken(user){
  return jwt.sign({email: user.email, password: user.name}, SECRET)
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