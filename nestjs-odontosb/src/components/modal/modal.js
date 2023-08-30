
import { Icon } from '@iconify/react';
import styles from './modal.module.css';

export default function Modal({ title, salvar, onClose, children }) {

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <div className='flex-center gap-10'>
            <Icon icon="carbon:close-filled" width="20" onClick={onClose} className={styles.closeIcon} />
            <span>{title}</span>
          </div>
          <div>
          <button onClick={salvar} className={styles.saveButton}>Salvar</button>
          </div>

        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

