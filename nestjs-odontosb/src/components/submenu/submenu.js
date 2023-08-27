import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Container from '../html/container/container';
import Input from '../html/input/input';

import styles from './submenu.module.css';

export default function Submenu() {

  return (
    <div className={styles.menu}>
      <Container>
        <div className={styles.itens}>
          <div className={styles.item}>
            <Icon icon="fluent:person-12-filled" width="20" />
            <div>
              Boa tarde Dra. Andressa
            </div>
          </div>
          <div className={styles.input}  >
            <Input placeholder="Pesquisar" icone="fluent:person-12-filled" />
          </div>
          <div className={styles.item}>
            <Icon icon="mdi:bell-outline" width="20" />
            <Link href="/login" className={styles.item}>
              <Icon icon="mdi:logout" width="20" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}