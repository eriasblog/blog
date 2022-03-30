import { UtilDataAuthor } from '@blog/util/data/author';
import { BsThreeDots, BsBookmarkPlus } from 'react-icons/bs';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';

import styles from './PostMainUi.module.css';

/* eslint-disable-next-line */
export interface PostMainUiProps {}

export function PostMainUi(props: PostMainUiProps) {
  return (
    <main className="container mt-4">
      <div className="flex gap-2 mb-4 ml-3 w-100 items-center">
        <UtilDataAuthor className="rounded-full" width={44} height={44} />
        <div className="grid gap-1">
          <div className="flex gap-2">
            <p className="text-[15px] font-semibold">Elias Cerne</p>
            <button className="bg-[#047AFF] px-2 py-0.5 rounded-xl text-white text-xs">
              Follow
            </button>
          </div>
          <div className="flex gap-1 text-[13px] text-[#676767] font-medium">
            <p>Mar 23 2022</p>
            <p>•</p>
            <p>5 min read</p>
          </div>
        </div>
        <span className="flex grow justify-end mr-4">
          <BsThreeDots className="text-xl" />
        </span>
      </div>
    </main>
  );
}

export default PostMainUi;
