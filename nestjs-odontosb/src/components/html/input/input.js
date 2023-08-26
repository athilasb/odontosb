import styles from './input.module.css';
import { Icon } from '@iconify/react';

  

export default function Input( {icone, ...props }) {
    return (
        <span className={styles.position}>
            <input className={styles.input} {...props} />
            {icone != undefined ? <Icon className={styles.icone}  width="20" icon={icone} /> : null}
        </span>
    )
}
