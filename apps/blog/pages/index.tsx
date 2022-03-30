import Image from 'next/image';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PostLayoutUi } from '@blog/post/layout/ui';
import { PostMainUi } from '@blog/post/main/ui';

/* eslint-disable-next-line */
export interface SharedSearchButtonProps {}

export function SharedSearchButton(props: SharedSearchButtonProps) {
  return (
    <PostLayoutUi>
      <PostMainUi />
    </PostLayoutUi>
  );
}

export default SharedSearchButton;
