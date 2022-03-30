import React from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PostHeaderUi } from '@blog/post/header/ui';
import { HeaderProvider } from '@blog/post/header/context';

import styles from './PostLayoutUi.module.css';

/* eslint-disable-next-line */
export interface PostLayoutUiProps {
  children: React.ReactChild;
}

export function PostLayoutUi(props: PostLayoutUiProps) {
  return (
    <HeaderProvider>
      <PostHeaderUi />
    </HeaderProvider>
  );
}

export default PostLayoutUi;
