"use client";

import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    try {
      const { data } = await axios.post('/api/upload', {
        fileName: image.name,
        fileType: image.type,
      });

      const { uploadUrl, fileUrl } = data;

      await axios.put(uploadUrl, image, {
        headers: {
          'Content-Type': image.type,
        },
      });

      setImageUrl(fileUrl);
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
    }
  };

  return (
    <div className='w-full px-12 flex flex-col items-center gap-20'>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} className='bg-primary text-writingLight py-2 px-5 rounded'>Upload</button>
    </div>
  );
};

export default UploadImage;