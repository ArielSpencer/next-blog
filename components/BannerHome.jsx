const BannerHome = () => {
  return (
    <section>
      <div
        className="text-center my-8"
      >
        <h1
          className="text-3xl sm:text-5xl font-alternative font-extralight italic"
        >
          Posts Recentes
        </h1>
        <p
          className="mt-10 max-w-[740px] mx-auto text-xs sm:text-lg"
        >
          Explore artigos e tutoriais sobre programação, UX design e SEO. Aprenda dicas práticas, melhores práticas e tendências do mundo tech por Ariel Spencer.
        </p>
        <form
          className="bg-writingLight flex justify-between max-w-[600px] scale-75 sm:scale-100 mx-auto mt-10 border-2 border-writingDark shadow-[-4px_4px_0px_#161616] rounded-full"
          action=""
        >
          <input type="email" placeholder="Digite seu e-mail e receba nossa newsletter" className="pl-8 outline-none rounded-full flex-grow w-full" />
          <button
            type="submit"
            className="bg-background hover:bg-secondary hover:text-writingLight border-l-2 border-black rounded-r-full p-4 w-[35%] font-semibold"
          >
            Em Breve
          </button>
        </form>
      </div>
    </section>
  )
}

export default BannerHome;