import styles from './UtilSearchButton.module.css';

/* eslint-disable-next-line */
export interface UtilSearchButtonProps {}

export function UtilSearchButton(props: UtilSearchButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UtilSearchButton!</h1>
    </div>
  );
}

export default UtilSearchButton;
