import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";



const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Link
        href="/"
      >
        <h2
          className="text-2xl sm:text-4xl text-writingLight hover:text-background font-alternative font-medium italic cursor-pointer"
        >
          A
          <span className="font-alternative font-medium not-italic">
            S
          </span>
        </h2>
      </Link>
      <p
        className="text-md text-white"
      >
        Desenvolvido por Ariel Spencer | Copyright © 2025
      </p>
      <div
        className="flex text-white text-2xl gap-4"
      >
        <Link href="https://github.com/arielspencer/" target="_blank" className="hover:text-secondary">
          <AiFillGithub width={40} />
        </Link>
        <Link href="https://instagram.com/arielspencer.dev" target="_blank" className="hover:text-secondary">
          <AiFillInstagram width={40} />
        </Link>
        <Link href="https://www.linkedin.com/in/arielspencer-log/" target="_blank" className="hover:text-secondary">
          <AiFillLinkedin width={40} />
        </Link>
        <Link href="https://wa.me/5511991007079" target="_blank" className="hover:text-secondary">
          <IoLogoWhatsapp width={40} />
        </Link>
      </div>
    </div>
  )
}

export default Footer;