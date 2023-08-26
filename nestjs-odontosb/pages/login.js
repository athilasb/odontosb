import { useState } from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import styles from '../styles/Login.module.css';

import LoginCard from '../src/components/loginCard/loginCard';
import Input from '../src/components/html/input/input';
import Botton from '../src/components/html/botton/botton';
export default function LoginPages() {

  const [formData, setFormData] = useState({
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
      const response = await fetch('/api/user/login', {
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
      <LoginCard title="Login">
        <form onSubmit={handleForm} className={styles.form}>
          <Input icone="ion:person" type="email" placeholder="Seu email" required value={formData.email} onChange={(e) => handleFormEdit(e, 'email')} />
          <Input icone="uil:padlock" type="password" placeholder="sua senha" required value={formData.password} onChange={(e) => handleFormEdit(e, 'password')}/>
          <Botton>Entrar</Botton>
          {error && <p>{error}</p>}
          <Link style={{color:"black"}} href="/cadastro">Não tem uma conta? Cadastre-se</Link>
        </form>
      </LoginCard>
    </div>
  )
}
