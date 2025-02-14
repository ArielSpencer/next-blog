import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";

const ImageGalleryPopup = ({ onClose, onSelect }) => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("/api/images");
      setImages(response.data.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      toast.error("Erro ao buscar imagens.");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative bg-writingLight p-4 rounded-lg max-w-[90vw] h-[80vh] overflow-auto">
        <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 text-writingLight p-2 rounded-full">
          <MdClose />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.key} className="relative bg-accent w-[300px] h-[200px] rounded overflow-hidden">
              <Image
                src={`https://cdn.arielspencer.com.br/${image.key}`}
                alt={image.key}
                width={300}
                height={200}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => onSelect(`https://cdn.arielspencer.com.br/${image.key}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryPopup;