import { getCookie } from 'cookies-next';
import { verificaToken } from './user';

export const withAuthServerSideProps = (getServerSidePropsFunc) => async ({ req, res }) => {
  try {
    const token = getCookie('authorization', { req, res });
    if (!token) throw new Error('Token inválido');
    verificaToken(token);
    return await getServerSidePropsFunc({ req, res });
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };
  }
};
