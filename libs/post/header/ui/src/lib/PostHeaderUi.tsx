import styles from './PostHeaderUi.module.css';

/* eslint-disable-next-line */
export interface PostHeaderUiProps {}

export function PostHeaderUi(props: PostHeaderUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PostHeaderUi!</h1>
    </div>
  );
}

export default PostHeaderUi;
