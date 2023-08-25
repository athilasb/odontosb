import { useState } from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import styles from '../styles/Cadastro.module.css';

import CadastroCard from '../src/components/cadastroCard/cadastroCard';
import Input from '../src/components/input/input';
import Botton from '../src/components/botton/botton';
import {withAuthServerSideProps } from '../services/auth';

export default function CadastroPages() {
  const [formData, setFormData] = useState({
    cpf: '',
    nome: '',
    sobre_nome: '',
    data_nascimento: '',
    email: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({ ...formData, [name]: event.target.value });
  }
  
  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch('/api/pacientes/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(formData)
      })
      const json = await response.json();
      if (response.status !== 201) throw new Error(json)
      setCookie("authorization", json)
      router.push('/')

    } catch (error) {
      setError(error.message);
    }
  }
  //input terá nome , sobre nome, data de nascimento e email
  return (
    <div className={styles.background}>
      <CadastroCard title="Cadastre sua conta">
        <form onSubmit={handleForm} className={styles.form}>
        <Input maxlength="11" type="text" placeholder="Preencha seu cpf" required value={formData.cpf} onChange={(e) => handleFormEdit(e, 'cpf')} />
          <Input type="text" placeholder="Preencha seu nome" required value={formData.nome} onChange={(e) => handleFormEdit(e, 'nome')} />
          <Input type="text" placeholder="Preencha seu sobre nome" required value={formData.sobre_nome} onChange={(e) => handleFormEdit(e, 'sobre_nome')} />
          <Input type="date" placeholder="Preencha sua data de nascimento" required value={formData.data_nascimento} onChange={(e) => handleFormEdit(e, 'data_nascimento')} />
          <Input type="email" placeholder="Seu email" required value={formData.email} onChange={(e) => handleFormEdit(e, 'email')} />
          <Botton>Cadastrar</Botton>
          {error && <p>{error}</p>}
          <Link style={{color:"black"}} href="/login">Já tem uma conta? Faça login</Link>
          <Link href="/">home</Link>
        </form>
      </CadastroCard>
    </div>
  );
}


export const getServerSideProps = withAuthServerSideProps(async ({ req, res }) => {
  return {
    props: {},
  };
});
