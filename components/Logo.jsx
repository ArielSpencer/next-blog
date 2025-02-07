import Link from "next/link";

const Logo = ({ variant = "default", color = "light" }) => {
  const textColor = color === "dark" ? "text-writingDark hover:text-writingDark/60" : "text-writingLight hover:text-background";

  return (
    <Link href="/">
      {variant === "icon" ? (
        <h2 className={`text-2xl sm:text-4xl font-alternative font-medium italic cursor-pointer ${textColor}`}>
          A<span className="font-alternative font-medium not-italic">S</span>
        </h2>
      ) : (
        <h2 className={`text-2xl sm:text-4xl font-normal cursor-pointer ${textColor}`}>
          <span className="font-alternative font-medium italic">A</span>riel <span className="font-alternative font-medium">S</span>pencer
        </h2>
      )}
    </Link>
  );
};

export default Logo;