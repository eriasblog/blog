import styles from './PostMainAuthorUi.module.css';

/* eslint-disable-next-line */
export interface PostMainAuthorUiProps {}

export function PostMainAuthorUi(props: PostMainAuthorUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PostMainAuthorUi!</h1>
    </div>
  );
}

export default PostMainAuthorUi;
