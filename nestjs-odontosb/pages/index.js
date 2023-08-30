import Main from '../src/main/main'; // Certifique-se de importar o caminho correto para o componente Menu
import Cardhome from '../src/components/cardhome/cardhome';
import styles from '../styles/Index.module.css';
import {withAuthServerSideProps } from '../services/auth';

export default function Home() {
  return (
    <Main title="Central de Relacionamento com Cliente">
      <div className={styles.cards}>
        <Cardhome icone="fluent-mdl2:waitlist-confirm-mirrored" title="Confimar" subtitulo="Pacientes:" link="page1" />
      </div>
    </Main>
  );
}

export const getServerSideProps = withAuthServerSideProps(async ({ req, res }) => {
  return {
    props: {},
  };
});
