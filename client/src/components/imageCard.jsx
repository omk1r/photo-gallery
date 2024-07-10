import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Card = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get("http://localhost:3000/");
      setImages(response.data);
    };
    fetchImages();
  }, []);

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    backgroundColor: "#fff",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  const titleStyle = {
    fontSize: "1.2em",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const descriptionStyle = {
    fontSize: "1em",
    margin: "10px 0",
  };

  const dateStyle = {
    fontSize: "0.9em",
    color: "#666",
    margin: "10px 0",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "20px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
  };

  return (
    <>
      <div style={cardContainerStyle}>
        {images.map((image, index) => (
          <div key={index} style={cardStyle}>
            <img src={image.imageUrl} alt={image.title} style={imageStyle} />
            <div style={titleStyle}>{image.title}</div>
            <div style={descriptionStyle}>{image.description}</div>
            <div style={dateStyle}>
              {new Date(image.dateCreated).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
      <Link to="/imageForm" style={buttonStyle}>
        Upload Image
      </Link>
    </>
  );
};
