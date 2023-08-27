import styles from './cardhome.module.css'
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Cardhome({ icone, title, subtitulo, link }) {
  return (
    <Link href={link} className={styles.cardhome}>
      <div className={styles.card}>
        <div className={styles.icone}><Icon width="30" icon={icone} /></div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitulo}>{subtitulo}</div>
      </div>
    </Link>
  )
}