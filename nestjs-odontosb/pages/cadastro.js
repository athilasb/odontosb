import { useState } from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import styles from '../styles/Cadastro.module.css';

import CadastroCard from '../src/components/cadastroCard/cadastroCard';
import Input from '../src/components/input/input';
import Botton from '../src/components/botton/botton';

export default function CadastroPages() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({ ...formData, [name]: event.target.value });
  }
  
  const handleForm = async (event) => {
    try {
      event.preventDefault();
      console.log(formData);
      const response = await fetch('/api/user/cadastro', {
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

  return (
    <div className={styles.background}>
      <CadastroCard title="Cadastre sua conta">
        <form onSubmit={handleForm} className={styles.form}>
          <Input type="text" placeholder="Login" required value={formData.name} onChange={(e) => handleFormEdit(e, 'name')} />
          <Input type="email" placeholder="Email" required value={formData.email} onChange={(e) => handleFormEdit(e, 'email')} />
          <Input type="password" placeholder="Senha" required value={formData.password} onChange={(e) => handleFormEdit(e, 'password')} />
          <Botton>Cadastrar</Botton>
          {error && <p>{error}</p>}
          <Link style={{color:"black"}} href="/login">Já tem uma conta? Faça login</Link>
        </form>
      </CadastroCard>
    </div>
  );
}
