import styles from './cadastroCard.module.css'
export default function CadastroCard({title, children}) {
    return (
      <div className={styles.card}>
        <h2>{title}</h2>
        {children}
      </div>
    )
  }
  