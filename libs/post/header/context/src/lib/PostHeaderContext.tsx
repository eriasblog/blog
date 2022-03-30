import styles from './PostHeaderContext.module.css';

/* eslint-disable-next-line */
export interface PostHeaderContextProps {}

export function PostHeaderContext(props: PostHeaderContextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PostHeaderContext!</h1>
    </div>
  );
}

export default PostHeaderContext;
