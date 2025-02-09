"use client";

import { use } from "react";
import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaSquareFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import axios from "axios";

const Page = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const [data, setData] = useState(null);

  const currentIndex = blog_data.findIndex(post => post.id === Number(params.id));
  const previousPost = currentIndex > 0 ? blog_data[currentIndex - 1] : null;
  const nextPost = currentIndex < blog_data.length - 1 ? blog_data[currentIndex + 1] : null;

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`/api/blog?id=${params.id}`);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      }
    };

    if (params?.id) {
      fetchBlogData();
    }
  }, [params]);

  useEffect(() => {
    if (params?.id) {
      const foundPost = blog_data.find((post) => Number(post.id) === Number(params.id));
      if (foundPost) {
        setData(foundPost);
      }
    }
  }, [params]);

  const shareUrl = `https://blog.arielspencer.com/post/${params.id}`;
  const title = data ? `Confira esse post incrível! ${data.title}` : "Confira esse post incrível!";

  return data ? (
    <>
      <section className="bg-primary/50 p-5 md:px-12 lg:px-28">
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-4xl font-semibold max-w-[700px] mx-auto ">
            {data.title}
          </h1>
          <p
            className="max-w-[740px] mx-auto text-xl pt-8 pb-12"
          >
            {data.description}
          </p>
        </div>
      </section>
      <section className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-writingLight"
          src={data.image}
          width={1280}
          height={720}
          alt={data.alt}
          priority
        />

        <div className="flex flex-row items-center justify-center mx-auto gap-4 my-8">
          <Image
            className="border border-writingLight rounded-full"
            src={data.authorImg}
            width={36}
            height={36}
            alt={data.author}
          />
          <p>Por: {data.author} | Tempo de leitura: {data.readingTime} minutos</p>
        </div>

        <h1 className="my-8 text-[28px] font-semibold">Introdução:</h1>
        <p>{data.description}</p>

        <h3 className="my-5 text-[18px] font-semibold">Conteúdo:</h3>
        <p className="my-3 whitespace-pre-line">{data.content}</p>

        <div className="mt-12 mb-24">
          <p className="text-writingDark font-semibold my-4">
            Compartilhe esse post nas redes sociais:
          </p>
          <div className="flex space-x-4 text-2xl">
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              className="hover:text-primary"
            >
              <FaSquareFacebook />
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
              target="_blank"
              className="hover:text-primary"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
              target="_blank"
              className="hover:text-primary"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              className="hover:text-primary"
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 justify-between items-center mt-12 mb-20 font-semibold">
          {previousPost && (
            <Link
              href={`/post/${previousPost.id}`}
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <LiaLongArrowAltLeftSolid size={24} />
              <span>{previousPost.title}</span>
            </Link>
          )}

          {nextPost && (
            <Link
              href={`/post/${nextPost.id}`}
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <span>{nextPost.title}</span>
              <LiaLongArrowAltRightSolid size={24} />
            </Link>
          )}
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default Page;
