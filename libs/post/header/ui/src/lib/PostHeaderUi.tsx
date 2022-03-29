import { useState } from 'react';
import Link from 'next/link';
import { PostHeaderNav } from '@blog/post/header/nav';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ReactComponent as Logo } from '../../../../../../apps/blog/public/icons/logo.svg';
import { AiOutlineAppstore } from 'react-icons/ai';

import './PostHeaderUi.module.css';

/* eslint-disable-next-line */
export interface PostHeaderUiProps {
  // setIsSearchOpen: any;
}

export function PostHeaderUi(props: PostHeaderUiProps) {
  return (
    <header className="fixed w-full bottom-0 left-0 z-40 bg-primaryColor">
      <nav className="max-w-header ml-6 mr-5 h-header flex justify-between items-center text-white">
        <Link href="/">
          <div className="cursor-pointer flex gap-1.5 items-center">
            <div className="w-8">
              <Logo />
            </div>
            <div className="flex gap-1">
              <h1 className="font-extrabold text-lg">htl.chat</h1>
              <p className="text-xxs text-countryCode font-medium">AT</p>
            </div>
          </div>
        </Link>
        <div className="flex items-center cursor-pointer">
          <Link href="/">
            <div className="px-2.5 py-1 border-[1px] border-white rounded-3xl text-sm font-semibold mr-3">
              Open Chat
            </div>
          </Link>
          <AiOutlineAppstore
            className="text-xl"
            // onClick={() => setNavMenuOpen(true)}
          />
        </div>
      </nav>
      <PostHeaderNav
      // navMenuOpen={navMenuOpen}
      // setNavMenuOpen={setNavMenuOpen}
      // setIsSearchOpen={setIsSearchOpen}
      />
    </header>
  );
}

export default PostHeaderUi;
