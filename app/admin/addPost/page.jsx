"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import ImageGalleryPopup from "@/components/adminComponents/ImageGalleryPopup";

const page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Programação",
    image: "",
    alt: "",
    author: "Ariel Spencer",
    authorImg: "/images/ariel-spencer.png",
    readingTime: "",
    content: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      toast.error("Por favor, selecione uma imagem de thumbnail antes de adicionar o post.");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", selectedImage);
    formData.append("alt", data.alt || "Thumbnail blog");
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("readingTime", data.readingTime || "5");
    formData.append("content", data.content);

    try {
      const response = await axios.post("/api/blog", formData);

      if (response.data.success) {
        toast.success(response.data.message);
        setSelectedImage(null);
        setData({
          title: "",
          description: "",
          category: "Programação",
          image: "",
          alt: "",
          author: "Ariel Spencer",
          authorImg: "/images/ariel-spencer.png",
          readingTime: "",
          content: ""
        });
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Erro na requisição");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 pb-20 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">
          Título do post:
        </p>
        <input name="title" onChange={onChangeHandler} value={data.title} className="w-full sm:w-[500px] mt-4 p-4 border rounded-md" type="text" placeholder="Escreva o título do post" minLength={30} maxLength={70} required />

        <p className="text-xl mt-4">
          Meta Description:
        </p>
        <textarea name="description" onChange={onChangeHandler} value={data.description} className="w-full sm:w-[500px] mt-4 p-4 border rounded-md" type="text" placeholder="Escreva o resumo do conteúdo" minLength={70} maxLength={160} rows={2} required />

        <p className="text-xl mt-4">Selecionar Imagem para Thumbnail</p>
        <button type="button" onClick={() => setShowGallery(true)} className="bg-secondary hover:bg-primary w-64 h-12 mt-4 text-writingLight">
          Visualizar Galeria
        </button>
        {selectedImage && (
          <div className="mt-4">
            <Image
              src={selectedImage}
              alt="Thumbnail selecionada"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {showGallery && (
          <ImageGalleryPopup
            onClose={() => setShowGallery(false)}
            onSelect={(image) => {
              setSelectedImage(image);
              setShowGallery(false);
            }}
          />
        )}

        <p className="text-xl mt-4">
          Descrição alternativa da thumbnail:
        </p>
        <input name="alt" onChange={onChangeHandler} value={data.alt} className="w-full sm:w-[500px] mt-4 p-4 border rounded-md" type="text" placeholder="Descreva a imagem" minLength={10} maxLength={125} required />

        <p className="text-xl mt-4">
          Tempo de leitura (minutos):
        </p>
        <input
          name="readingTime"
          onChange={onChangeHandler}
          value={data.readingTime}
          className="w-full sm:w-[500px] mt-4 p-4 border rounded-md"
          type="number"
          min="1"
          placeholder="Ex: 5"
          required
        />

        <p className="text-xl mt-4">
          Categoria:
        </p>
        <select name="category" onChange={onChangeHandler} value={data.category} className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded-md text-writingDark">
          <option value="Programação">Programação</option>
          <option value="UX Design">UX Design</option>
          <option value="SEO">SEO</option>
        </select>

        <p className="text-xl mt-4">
          Autor:
        </p>
        <select name="author" onChange={onChangeHandler} value={data.author} className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded-md text-writingDark">
          <option value="Ariel Spencer">Ariel Spencer</option>
        </select>

        <p className="text-xl mt-4">
          Conteúdo:
        </p>
        <textarea name="content" onChange={onChangeHandler} value={data.content} className="w-full sm:w-[500px] mt-4 p-4 border rounded-md" type="text" placeholder="Escreva o conteúdo" minLength={300} rows={10} required />

        <br />
        <button type="submit" className="bg-secondary hover:bg-primary w-64 h-12 mt-8 text-writingLight">
          Adicionar post
        </button>
      </form >
    </>
  );
};

export default page;