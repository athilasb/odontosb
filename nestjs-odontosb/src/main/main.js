import React from 'react';
import styles from './main.module.css';
import Menu from '../components/menu/menu';
import Container from '../components/html/container/container';
import Titulo from '../components/html/titulo/titulo';
import Submenu from '../components/submenu/submenu';

const menuItems = [
    { name: 'Página Inicial', link: '/page' },
    { name: 'login', link: '/page1' },  
];

export default function Main({ title, children }) {
    return (
        <div>
            <div className={styles.main}>
                <Menu menuItems={menuItems} />
                <Submenu />
                {title && <Container> <Titulo>{title}</Titulo> </Container>}
            </div>
            <Container>
                {children}
            </Container>
        </div>
    )
}
