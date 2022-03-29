import Image from 'next/image'
import { PostLayoutUi } from '@blog/post/layout/ui';

/* eslint-disable-next-line */
export interface SharedSearchButtonProps {}

export function SharedSearchButton(props: SharedSearchButtonProps) {
  const myLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) => {
    return `https://yt3.ggpht.com/yti/APfAmoHXagPJqsoblSlAwzkf_We4PmNAVy51AF_OLQyiFw=s${width}-c-k-c0x00ffffff-no-rj-mo`;
  };
  return (
    <PostLayoutUi>
      <Image
        loader={myLoader}
        src="me.png"
        alt="Picture of the author"
        width={128}
        height={128}
      />
    </PostLayoutUi>
  );
}

export default SharedSearchButton;
