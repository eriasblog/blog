import React, { Fragment } from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PostHeaderUi } from '@blog/post/header/ui';
import { HeaderProvider } from '@blog/post/header/context';

import styles from './PostLayoutUi.module.css';

/* eslint-disable-next-line */
export interface PostLayoutUiProps {
  children: React.ReactChild;
}

export function PostLayoutUi(props: PostLayoutUiProps) {
  const { children } = props;
  return (
    <Fragment>
      <HeaderProvider>
        <PostHeaderUi />
      </HeaderProvider>
      <main className="container">{children}</main>
    </Fragment>
  );
}

export default PostLayoutUi;
