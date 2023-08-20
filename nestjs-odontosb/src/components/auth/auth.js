import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { verificaToken } from '../../../services/user';

export default function Main({ auth, children }) {

  if (auth) {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const token = getCookie('authorization');
        if (!token) {
          router.push('/login');
          return;
        }
        const isAuthenticated = await verificaToken(token);
        if (isAuthenticated == false) {
          router.push('/login');
        }
      };
      checkAuth();
    }, []);

  }

  return children;
}
