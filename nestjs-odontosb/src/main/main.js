import styles from './main.module.css';
import Menu from '../components/menu/menu';
import Container from '../components/html/container/container';

const menuItems = [
    { name: 'Página Inicial', link: '/page' },
    { name: 'login', link: '/page1' },
    { name: 'cadastro', link: '/cadastro' },
];

export default function Main({ children }) {
    return (
        <div>
            <Menu menuItems={menuItems} />
            <Container>
                {children}
            </Container>
        </div>
    )
}

