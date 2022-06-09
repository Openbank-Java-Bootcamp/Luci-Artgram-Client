import axios from "axios";
import { useEffect, useState } from "react";
import AddPainting from "../components/AddPainting";
import PaintingCard from "../components/PaintingCard";

const API_URL = "http://localhost:5005";

function ProfilePage(props){
    const [userPaintings, setUserPaintings] = useState([]);

    const getAllUserPaintings = () => {
      const storedToken = localStorage.getItem("authToken");
  
      axios
        .get(`${API_URL}/api/paintings`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => setUserPaintings(response.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getAllUserPaintings();
    }, []);

return(
    <div className="ProfilePage">
        <div>
               <AddPainting refreshPaintings={getAllUserPaintings}/>
        </div>
     
      
        
    </div>
    
)
}

export default ProfilePage;