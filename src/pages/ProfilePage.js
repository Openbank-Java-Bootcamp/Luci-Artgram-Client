import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddPainting from "../components/AddPainting";
import PaintingCard from "../components/PaintingCard";

const API_URL = "http://localhost:5005";

function ProfilePage(props) {
  const [paintings, setPaintings] = useState([]);

  const getAllPaintings = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/paintings`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPaintings(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPaintings();
  }, []);

  return (
    <div className="ProfilePage">
      <div>
      <Link to="/newPainting">
        NEW PAINTING
      </Link>
        
      </div>
    </div>
  );
}

export default ProfilePage;
