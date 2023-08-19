import styles from './botton.module.css';

export default function Botton({props, children}) {
    return (
        <botton className={styles.botton} {...props}>{children} </botton>
    )
}