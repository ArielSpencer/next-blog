import React from "react";
import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";
import Logo from "./Logo";

const Header = () => {
  return (
    <section>
      <div className="bg-primary flex justify-between items-center p-8 md:px-16 lg:px-24">
        <Logo />

        <Link
          href="http://wa.me/5511991007079"
          target="_blank"
        >
          <button
            className="bg-background hover:bg-secondary hover:text-writingLight flex items-center gap-2 font-semibold py-1 px-3 sm:py-3 sm:px-6 border-2 border-solid border-writingDark shadow-[-4px_4px_0px_#161616] rounded-full"
          >
            Contato
            <CiCoffeeCup className="text-2xl" />
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Header;