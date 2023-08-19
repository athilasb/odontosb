import Link from 'next/link';
import styles from '../styles/Cadastro.module.css';

import CadastroCard from '../src/components/cadastroCard/cadastroCard';
import Input from '../src/components/input/input';
import Botton from '../src/components/botton/botton';
export default function CadastroPages() {
    return (
      <div className={styles.background}>
        <CadastroCard title="Cadastre sua conta">
          <form className={styles.form}>
            <Input type="text" placeholder="Login" />
            <Input type="Email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Botton>Cadastrar</Botton>
            <Link href="/login">Já tem uma conta? Faça login</Link>
          </form>
        </CadastroCard>
      </div>
    )
  }
  