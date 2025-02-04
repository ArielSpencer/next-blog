import React from "react";
import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";

const Header = () => {
  return (
    <section>
      <div className="bg-primary flex justify-between items-center p-8 md:px-16 lg:px-24">
        <Link
          href="/"
        >
          <h2
            className="text-2xl sm:text-4xl font-normal text-writingLight hover:text-background cursor-pointer"
          >
            <span className="font-alternative font-medium italic">A</span>riel <span className="font-alternative font-medium">S</span>pencer
          </h2>
        </Link>

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