import Image from 'next/image';

import styles from './UtilDataAuthor.module.css';

/* eslint-disable-next-line */
export interface UtilDataAuthorProps {
  className: string;
  width: number;
  height: number;
}

export function UtilDataAuthor(props: UtilDataAuthorProps) {
  const { className, width, height } = props;

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
    <Image
      loader={myLoader}
      className={className}
      src="unnamed.png"
      alt="Picture of the author"
      width={width}
      height={height}
    />
  );
}

export default UtilDataAuthor;
