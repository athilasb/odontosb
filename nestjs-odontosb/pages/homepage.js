
import Main from '../src/components/auth/auth';

export default function homePage() {
  return (
    <Main auth={true}>
      <div>
       Esta pagina não é autentificada
      </div>
    </Main>
  );
}