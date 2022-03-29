import styles from './UtilSearchModal.module.css';

/* eslint-disable-next-line */
export interface UtilSearchModalProps {}

export function UtilSearchModal(props: UtilSearchModalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UtilSearchModal!</h1>
    </div>
  );
}

export default UtilSearchModal;
