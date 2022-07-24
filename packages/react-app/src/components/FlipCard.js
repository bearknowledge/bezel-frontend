import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

const FlipCard = ({ sneaker }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [position, setPosition] = useState("");

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
    setPosition(e);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <FrontCard sneaker={sneaker} handleClick={handleClick} />
      <BackCard position={position} handleClick={handleClick} />
    </ReactCardFlip>
  );
};

export default FlipCard;
