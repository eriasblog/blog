import styles from './PostHeaderNav.module.css';

/* eslint-disable-next-line */
export interface PostHeaderNavProps {}

export function PostHeaderNav(props: PostHeaderNavProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PostHeaderNav!</h1>
    </div>
  );
}

export default PostHeaderNav;
