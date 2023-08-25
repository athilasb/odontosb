import {withAuthServerSideProps } from '../services/auth';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/pacientes">pacientes</Link>
    </div>
  )
}

export const getServerSideProps = withAuthServerSideProps(async ({ req, res }) => {
  return {
    props: {},
  };
});
