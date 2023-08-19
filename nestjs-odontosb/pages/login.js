import Link from 'next/link';
import styles from '../styles/Login.module.css';

import LoginCard from '../src/components/loginCard/loginCard';
import Input from '../src/components/input/input';
import Botton from '../src/components/botton/botton';
export default function LoginPages() {
  return (
    <div className={styles.background}>
      <LoginCard title="Entre em sua conta">
        <form className={styles.form}>
          <Input type="email" placeholder="Seu email" />
          <Input type="password" placeholder="sua senha" />
          <Botton>Entrar</Botton>
          <Link href="/cadastro">Não tem uma conta? Cadastre-se</Link>
        </form>
      </LoginCard>
    </div>
  )
}
