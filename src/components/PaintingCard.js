import { Link } from "react-router-dom";


function PaintingCard({ description, picturePath, title, id }) {
  return (
    <div className="PictureCard card">
      <Link to={`/paintings/${id}`}>
        <img src={picturePath} alt={title}/>
        <h3>{title}</h3>
        <p style={{ maxWidth: "400px" }}>{description}</p>
      </Link>
    </div>
  );
}

export default PaintingCard;