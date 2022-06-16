import { useState } from "react";
import { Button } from "react-bootstrap";

// Like button

function LikeButton() {
  const [counter, setCounter] = useState(0);
  const [liked, setLiked] = useState(null);

  return (
    <div className="counter">
      <Button
        variant="light"
        onClick={() => {setLiked((prevLike) => !prevLike) ; setCounter(counter + 1)}}
      >
        {liked ? "❤️" : "🤍"}
      </Button>
    </div>
  );
}

export default LikeButton;
