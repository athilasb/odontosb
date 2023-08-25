
const { select, add} = require('../dbconnection.js');


export async function cadastro(body) {
  if (!body.nome || !body.sobre_nome || !body.data_nascimento || !body.email || !body.cpf)
    throw new Error('Nome, email data de nascimento e senha são obrigatórios');
  if(body.cpf.length < 11)
    throw new Error('CPF inválido');

  const users = await select('pacientes', '*', `cpf = '${body.cpf}'`);
  if (users.length > 0) throw new Error('paciente já cadastrado');

  const newUser = await add('pacientes', {
    nome: body.nome,
    sobre_nome: body.sobre_nome,
    data_nascimento: body.data_nascimento,
    email: body.email,
    cpf: body.cpf,
  });

  return newUser ;
}

