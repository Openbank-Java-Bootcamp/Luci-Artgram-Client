// src/pages/ProjectListPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import AddPainting from "../components/AddPainting";
import PaintingCard from "../components/PaintingCard";

const API_URL = "http://localhost:5005";

function HomePage() {
  const [paintings, setPainting] = useState([]);

  const getAllPaintings = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/paintings`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPainting(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPaintings();
  }, []);

  return (
    <div className="PaintingListPage">
      <AddPainting refreshPaintings={getAllPaintings} />

      {paintings.map((painting) => (
        <PaintingCard key={painting.id} {...painting} />
      ))}
    </div>
  );
}

export default HomePage;