import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ImageUploadForm from "./pages/imageForm";
import { Landing } from "./pages/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/imageForm" element={<ImageUploadForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
