import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImageUploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:3000/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Image uploaded successfully");
      console.log(response.data);
      navigate("/");
    } catch (error) {
      setMessage("Error uploading image");
      console.error(error);
    }
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const labelStyle = {
    alignSelf: "flex-start",
    margin: "10px 0 5px 0",
    fontWeight: "bold",
  };

  const messageStyle = {
    margin: "10px 0",
    color: message.includes("successfully") ? "green" : "red",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Upload Image</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="title" style={labelStyle}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="description" style={labelStyle}>
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ ...inputStyle, height: "100px" }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" style={labelStyle}>
            Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Upload
        </button>
      </form>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

export default ImageUploadForm;
