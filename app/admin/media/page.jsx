"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { MdDeleteForever, MdRemoveRedEye } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";

const page = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  const fetchImages = async () => {
    try {
      const response = await axios.get("/api/images");
      setImages(response.data);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      toast.error("Erro ao buscar imagens.");
    }
  };


  const handleUpload = async () => {
    if (!imageUpload) return;

    try {
      const { data } = await axios.post("/api/upload", {
        fileName: imageUpload.name,
        fileType: imageUpload.type,
      });

      const { uploadUrl, fileUrl } = data;

      await axios.put(uploadUrl, imageUpload, {
        headers: {
          "Content-Type": imageUpload.type,
        },
      });

      toast.success("Imagem enviada com sucesso.");
      setImageUpload(null);
      fetchImages();
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      toast.error("Erro ao fazer upload da imagem.");
    }
  };

  const deleteImage = async (key) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar esta imagem? Esta ação é irreversível.");
    if (!confirmed) return;

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
    <div className="py-12 px-2 md:px-[4vw]">
      <h2 className="text-2xl mb-5">Enviar nova imagem</h2>
      <div>
        <label htmlFor="image">
          {!imageUpload ? (
            <div className="bg-writingLight text-2xl flex flex-col items-center justify-center text-center w-full h-[250px] border border-2 border-dotted border-writingDark rounded-md gap-4">
              <LuImagePlus className="text-5xl" />
              <p>Selecionar a Imagem</p>
            </div>
          ) : (
            <div>
              <Image
                src={URL.createObjectURL(imageUpload)}
                width={500}
                height={200}
                alt="Preview da imagem"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </label>
        <input
          onChange={(e) => setImageUpload(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <div className="flex justify-end mt-8 gap-4 p-0 m-0"
        >
          <button
            onClick={() => setImageUpload(null)}
            className="bg-accent text-writingLight py-2 px-5 rounded"
            hidden={!imageUpload}
          >
            Cancelar
          </button>

          <button
            onClick={handleUpload}
            className="bg-accent text-writingLight py-2 px-5 rounded"
            hidden={!imageUpload}
          >
            Fazer Upload
          </button>
        </div>
      </div>

      <h2 className="text-2xl mb-5 mt-20">Galeria de Imagens</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.key} className="relative bg-accent w-[300px] h-[200px] rounded overflow-hidden">
            <Image
              src={`https://cdn.arielspencer.com.br/${image.key}`}
              alt={image.key}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 space-x-2 text-xl">
              <button
                onClick={() => setSelectedImage(`https://cdn.arielspencer.com.br/${image.key}`)}
                className="bg-accent text-writingLight p-1 rounded"
              >
                <MdRemoveRedEye />
              </button>
              <button
                onClick={() => deleteImage(image.key)}
                className="bg-red-500 text-writingLight p-1 rounded"
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-[90vw] h-[80vh]">
            <Image
              src={selectedImage}
              alt="Imagem visualizada"
              width={800}
              height={600}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 bg-red-500 text-writingLight p-2 rounded-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;