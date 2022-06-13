import { useState } from "react";
import { Button } from "react-bootstrap";

function LikeButton() {
  const [counter, setCounter] = useState(0);
  const [liked, setLiked] = useState(null);

  return (
    <div className="counter">
      <Button
        variant="outline-secondary"
        onClick={() => {setLiked((prevLike) => !prevLike) ; setCounter(counter + 1)}}
      >
        {liked ? "❤️" : "🤍"}
      </Button>
    </div>
  );
}

export default LikeButton;
