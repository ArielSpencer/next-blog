"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";


const page = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("/api/images");
      setImages(response.data);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      toast.error("Erro ao buscar imagens.");
    }
  };

  const deleteImage = async (key) => {
    try {
      await axios.delete("/api/images", { data: { key } });
      toast.success("Imagem deletada com sucesso.");
      fetchImages();
    } catch (error) {
      console.error("Erro ao deletar imagem:", error);
      toast.error("Erro ao deletar imagem.");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">Galeria de Imagens</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.key} className="relative">
            <Image   src={`https://cdn.arielspencer.com.br/${image.key}`} alt={image.key} width={200} height={200} className="object-cover" />
            <button
              onClick={() => deleteImage(image.key)}
              className="absolute top-2 right-2 bg-red-500 text-writingLightp-1 rounded"
            >
              <MdDeleteForever />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;