import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const Header = () => {
  return (
    <div className="p-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link
          href="/"
        >
          <h2
            className="text-2xl sm:text-4xl font-semibold"
          >
            Ariel Spencer
          </h2>
        </Link>
        <button
          className="bg-white flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] rounded-full"
        >
          Contato
          <GoArrowRight />
        </button>
      </div>
      <div
        className="text-center my-8"
      >
        <h1
          className="text-3xl sm:text-5xl font-medium"
        >
          Posts Recentes
        </h1>
        <p
          className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base"
        >
          Explore artigos e tutoriais sobre programação, UX design e SEO. Aprenda dicas práticas, melhores práticas e tendências do mundo tech por Ariel Spencer.
        </p>
        <form
          className="bg-white flex justify-between max-w-[600px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] rounded-full"
          action=""
        >
          <input type="email" placeholder="Digite seu e-mail e receba nossa newsletter" className="pl-8 outline-none rounded-full flex-grow w-full" />
          <button
            type="submit"
            className="border-l border-black p-4 active:bg-gray-600 active:text-white w-[30%]"
          >
            Inscreva-se
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header;