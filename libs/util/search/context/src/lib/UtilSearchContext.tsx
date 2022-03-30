import styles from './UtilSearchContext.module.css';

/* eslint-disable-next-line */
export interface UtilSearchContextProps {}

export function UtilSearchContext(props: UtilSearchContextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UtilSearchContext!</h1>
    </div>
  );
}

export default UtilSearchContext;
