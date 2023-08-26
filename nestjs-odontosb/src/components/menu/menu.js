import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../html/container/container';
import { useRouter } from 'next/router'; 

import styles from './menu.module.css';

function Menu({ menuItems }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menuItems);
  }, [menuItems]);

  const router = useRouter(); // Initialize the useRouter hook

  return (
    <div className={styles.menu}>
      <Container>
        <nav>
          <ul className={styles.itens} >
            {menu.map(item => (
              <li key={item.name}>
                <Link href={item.link} className={router.asPath === item.link ? styles.active : ''}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Menu;
