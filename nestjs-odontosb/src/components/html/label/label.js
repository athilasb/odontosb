import styles from './label.module.css';
import { Icon } from '@iconify/react';



export default function Label({ props, children }) {
    return (
        <span>
            <label className={styles.label} {...props} >
                {children}
            </label>
        </span>
    )
}
