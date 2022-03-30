import styles from './PostMainAuthorData.module.css';

/* eslint-disable-next-line */
export interface PostMainAuthorDataProps {}

export function PostMainAuthorData(props: PostMainAuthorDataProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PostMainAuthorData!</h1>
    </div>
  );
}

export default PostMainAuthorData;
