"use client";

import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import { signOut } from 'next-auth/react';

import { LiaTachometerAltSolid } from "react-icons/lia";
import { FiPlusCircle } from "react-icons/fi";
import { FiList } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlinePermMedia } from "react-icons/md";


const Sidebar = () => {

  return (
    <div className="bg-secondary flex flex-col fixed h-screen w-80 border-r border-writingDark">
      <Link
        href="/"
        className="px-2 sm:pl-14 py-3 h-[70px] border-b border-writingDark cursor-pointer">
        <Logo color="light" />
      </Link>
      <div className="w-28 w-80 h-full relative py-12">
        <div className="w-[50%] sm:w-[80%] absolute right-8 flex flex-col gap-5">
          <Link
            href="/admin"
            className="flex items-center border border-writingDark gap-3 font-medium pl-4 py-3 bg-writingLight shadow-[-5px_5px_0px_#000000] rounded-full">
            <LiaTachometerAltSolid className="text-xl" />
            <p>Painel administrativo</p>
          </Link>
          <Link
            href="/admin/addPost"
            className="flex items-center border border-writingDark gap-3 font-medium pl-4 py-3 bg-writingLight shadow-[-5px_5px_0px_#000000] rounded-full">
            <FiPlusCircle />
            <p>Adicionar post</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="flex items-center border border-writingDark gap-3 font-medium pl-4 py-3 bg-white shadow-[-5px_5px_0px_#000000] rounded-full">
            <FiList />
            <p>Todos os posts</p>
          </Link>
          <Link
            href="/admin/media"
            className="flex items-center border border-writingDark gap-3 font-medium pl-4 py-3 bg-white shadow-[-5px_5px_0px_#000000] rounded-full">
            <MdOutlinePermMedia />
            <p>Imagens</p>
          </Link>
          <Link
            href="/admin/subscription"
            className="flex items-center border border-writingDark gap-3 font-medium pl-4 py-3 bg-white shadow-[-5px_5px_0px_#000000] rounded-full">
            <FiMail />
            <p>Subscription</p>
          </Link>

          <button
            onClick={() => signOut()}
            className="flex items-center border border-writingDark gap-3 font-medium pl-4 py-3 bg-white shadow-[-5px_5px_0px_#000000] rounded-full"
          >
            <RiLogoutCircleLine />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;