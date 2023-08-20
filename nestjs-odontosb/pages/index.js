
import Main from '../src/components/auth/auth';

export default function Home() {
  return (
    <Main auth={true}>
      <div>
        Página autenticada
      </div>
    </Main>
  );
}