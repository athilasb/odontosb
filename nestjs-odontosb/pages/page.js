import Main from '../src/main/main'; // Certifique-se de importar o caminho correto para o componente Menu
import Cardhome from '../src/components/cardhome/cardhome';
import styles from '../styles/Index.module.css';

export default function App() {
  return (
    <Main title="Central de Relacionamento com Cliente">
      <div className={styles.cards}>
        <Cardhome icone="fluent-mdl2:waitlist-confirm-mirrored" title="Confimar" subtitulo="Pacientes:" link="page1" />
        <Cardhome icone="cil:birthday-cake" title="Aniversariantes" subtitulo="Pacientes:" link="page1" />
      </div>
    </Main>
  );
}
