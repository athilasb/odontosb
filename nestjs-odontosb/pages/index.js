import {withAuthServerSideProps } from '../services/auth';

export default function Home() {
  return (
    <div>
      pagina autentificada
    </div>
  )
}

export const getServerSideProps = withAuthServerSideProps(async ({ req, res }) => {
  return {
    props: {},
  };
});
