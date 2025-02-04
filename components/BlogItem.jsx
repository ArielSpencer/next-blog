import Link from "next/link";
import Image from "next/image";
import { LuFileSpreadsheet } from "react-icons/lu";


const BlogItem = ({ title, description, category, image, alt, id }) => {
  return (
    <div
      className="max-w-[330px] sm:max-w-[300px] bg-writingLight hover:bg-secondary/5 border border-writingDark rounded-b-[8px] hover:shadow-[-4px_4px_0px_#161616]"
    >
      <Link
        href={`/post/${id}`}
      >
        <Image
          src={image}
          alt={alt || 'Imagem alternativa não disponível'}
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>
      <p
        className="ml-4 mt-4 px-2 py-1 inline-block text-sm bg-secondary text-writingLight rounded-sm"
      >
        {category}
      </p>
      <div
        className="p-4"
      >
        <h5
          className="mb-2 font-semibold h-[80px]"
        >
          {title}
        </h5>
        <p
          className="mb-4 text-sm h-[100px]"
        >
          {description}
        </p>
        <Link
          href={`/post/${id}`}
          className="inline-flex items-center gap-2 mb-2 font-semibold text-center">
          <LuFileSpreadsheet />
          Visualizar artigo completo
        </Link>
      </div>
    </div>
  )
}

export default BlogItem;