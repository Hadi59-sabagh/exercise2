import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";


const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = "ip";

  useEffect(() => {
    axios
      .get(`https://api.pexels.com/v1/curated?page=${page}&per_page=10`, {
        headers: { Authorization: API_KEY },
      })
      .then((response) => {
        setImages([...images, ...response.data.photos]);
      });
  }, [page]);

  return (
    <div>
      <h2>گالری تصاویر</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {images.map((img) => (
          <img key={img.id} src={img.src.medium} alt={img.photographer} style={{ width: "100%" }} />
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>بارگذاری بیشتر</button>
    </div>
  );
};

export default ImageGallery;
