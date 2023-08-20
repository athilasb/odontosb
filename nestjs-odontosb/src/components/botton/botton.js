import styles from './botton.module.css';

export default function Botton({ children, ...props }) {
  return (
    <button className={styles.botton} {...props}>
      {children}
    </button>
  );
}
