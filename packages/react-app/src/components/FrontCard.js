import React from "react";

const FrontCard = ({ handleClick, sneaker }) => {
  const { results } = sneaker;
  const shoe = results[0];
  return (
    <div
      style={{
        margin: 10,
        padding: 15,
        width: 300,
        height: "inherit",
        background: "#7a7a7a",
        borderRadius: 10,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <button
        style={{
          marginRight: 15,
          border: "none",
          padding: "10px 20px",
          background: "#1bc11b",
          color: "#F1F1F1",
          fontSize: 19,
          cursor: "pointer",
          borderRadius: 5,
          width: "100%",
        }}
        onClick={(e) => handleClick("up")}
      >
        Up
      </button>
      <h3
        style={{ fontFamily: "monospace", fontSize: 21, color: "antiquewhite" }}
      >
        {shoe.name}
      </h3>
      <h3 style={{ color: "antiquewhite" }}>${shoe.estimatedMarketValue}</h3>
      <img
        style={{
          width: "100%",
          height: 130,
          objectFit: "cover",
          cursor: "pointer",
          marginBottom: 30,
        }}
        src={shoe.image.original}
        alt="shoe-001"
      />

      <button
        style={{
          border: "none",
          padding: "10px 20px",
          background: "crimson",
          color: "#F1F1F1",
          fontSize: 19,
          cursor: "pointer",
          borderRadius: 5,
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 10,
        }}
        onClick={(e) => handleClick("down")}
      >
        Down
      </button>
    </div>
  );
};

export default FrontCard;
