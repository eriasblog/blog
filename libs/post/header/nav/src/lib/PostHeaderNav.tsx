import { useContext } from 'react';
import Link from 'next/link';
import { FaCircleNotch } from 'react-icons/fa';
import { HiOutlineSupport } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline, IoMdClose } from 'react-icons/io';
import { BsChat } from 'react-icons/bs';
import { UtilSearchButton } from '@blog/util/search/button';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { SearchProvider } from '@blog/util/search/context';
import { UtilSearchModal } from '@blog/util/search/modal';
import { HeaderCtx } from '@blog/post/header/context';

import styles from './PostHeaderNav.module.css';

/* eslint-disable-next-line */
export interface PostHeaderNavProps {}

export function PostHeaderNav(props: PostHeaderNavProps) {
  const { navOpen, toggleNav } = useContext(HeaderCtx);

  return (
    <Transition appear show={navOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed bottom-0 left-0 w-full bg-primaryColor pt-8 px-6 pb-5 drop-shadow-3xl rounded-t-2xl z-50"
        onClose={() => {
          toggleNav && toggleNav(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="grid gap-6">
            <ul className="grid gap-8 grid-cols-3 text-titleColor">
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <HiOutlineSupport className="text-xl" />
                    <p className="">More</p>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <HiOutlineSupport className="text-xl" />
                    <p className="">Author</p>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <BsChat className="text-xl" />
                    <p className="">Comments</p>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <IoMdCheckmarkCircleOutline className="text-xl" />
                    <p className="">Home</p>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <IoMdCheckmarkCircleOutline className="text-xl" />
                    <p className="">Favourites</p>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/link">
                  <div className="flex flex-col items-center text-sm font-medium">
                    <IoMdCheckmarkCircleOutline className="text-xl" />
                    <p className="">Write</p>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div
                className="w-[80%] ml-3"
                onClick={() => {
                  toggleNav && toggleNav(false);
                }}
              >
                <SearchProvider>
                  <UtilSearchButton />
                  <UtilSearchModal />
                </SearchProvider>
              </div>
              <IoMdClose
                className="text-2xl cursor-pointer text-titleColor mr-1"
                onClick={() => {
                  toggleNav && toggleNav(false);
                }}
              />
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default PostHeaderNav;
