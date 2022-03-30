import styles from './util-data-post.module.css';

/* eslint-disable-next-line */
export interface UtilDataPostProps {}

export function UtilDataPost(props: UtilDataPostProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UtilDataPost!</h1>
    </div>
  );
}

export default UtilDataPost;
