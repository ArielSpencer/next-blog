import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
    >
      <h2
        className="text-2xl sm:text-4xl font-normal text-writingLight hover:text-background cursor-pointer"
      >
        <span className="font-alternative font-medium italic">A</span>riel <span className="font-alternative font-medium">S</span>pencer
      </h2>
    </Link>
  )
}

export default Logo;