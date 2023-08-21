import {getCookie} from 'cookies-next';
import {verificaToken} from './user';

export default function Main({ children, ...props }) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export const  getServerSideProps = async({req, res}) => {
  try {
    const token = getCookie('authorization', {req, res});
    if(!token) throw new Error('Token inválido')
    verificaToken(token)
    return {
      props: {}
    }
  }catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props:{}
    }
  }

}