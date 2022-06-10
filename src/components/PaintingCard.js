import { Button } from "bootstrap";
import { Link } from "react-router-dom";

function PaintingCard({ picturePath, title, id }) {
  return (
    <div className="PictureCard card" style={{ width: "30rem" }}>
      <Link className="linkCard" to={`/paintings/${id}`}>
        <img
          variant="top"
          width={"300px"}
          src={`data:image/png;base64,${picturePath}`}
          alt={title}
        />
        <h3>{title}</h3>
        <h4>💜</h4>
      </Link>
    </div>
  );
}

export default PaintingCard;
