"use client";

import { assets } from "@/assets/assets";
import Sidebar from "@/components/adminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from "next-auth/react"
import { Providers } from "@/app/providers";

export default function Layout({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (status === "unauthenticated") {
      router.push('/login');
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (
      <Providers>
        <div className="flex">
          <ToastContainer theme="light" />
          <Sidebar />
          <div className="flex flex-col w-full h-full ml-80">
            <div className="flex items-center justify-between w-full py-3 px-12 h-[68px] border-b border-writingDark">
              <h3>
                Admin Panel
              </h3>
              <div className="flex flex-row items-center gap-4">
                <p>{session?.username}</p>
                <Image
                  className="border border-writingLight rounded-full"
                  src={assets.profile_icon}
                  width={40}
                  height={40}
                  alt={session?.username}
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      </Providers>
    )
  }

  return null;
}