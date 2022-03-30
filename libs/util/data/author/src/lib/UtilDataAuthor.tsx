import styles from './UtilDataAuthor.module.css';

/* eslint-disable-next-line */
export interface UtilDataAuthorProps {}

export function UtilDataAuthor(props: UtilDataAuthorProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UtilDataAuthor!</h1>
    </div>
  );
}

export default UtilDataAuthor;
