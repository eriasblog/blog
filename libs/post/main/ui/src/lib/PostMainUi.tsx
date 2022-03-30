import styles from './PostMainUi.module.css';

/* eslint-disable-next-line */
export interface PostMainUiProps {}

export function PostMainUi(props: PostMainUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PostMainUi!</h1>
    </div>
  );
}

export default PostMainUi;
