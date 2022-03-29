import React from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PostHeaderUi } from '@blog/post/header/ui';

import styles from './PostLayoutUi.module.css';

/* eslint-disable-next-line */
export interface PostLayoutUiProps {
  children: React.ReactChild;
}

export function PostLayoutUi(props: PostLayoutUiProps) {
  return (<PostHeaderUi />);
}

export default PostLayoutUi;
