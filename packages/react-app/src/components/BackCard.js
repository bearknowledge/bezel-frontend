import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const BackCard = ({ handleClick, position }) => {
  return (
    <div
      style={{
        margin: 10,
        padding: 15,
        width: 300,
        height: "inherit",
        background:
          position === "up"
            ? "#1bc11b"
            : position === "down"
            ? "crimson"
            : "#e5e5e5",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ArrowBackIcon
            style={{ cursor: "pointer", color: "#F1F1F1" }}
            onClick={handleClick}
          />
          <h3 style={{ color: "#F1F1F1" }}> Set Position</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {position === "up" && (
            <>
              <ArrowUpwardIcon style={{ color: "#F1F1F1" }} />
              <h3 style={{ color: "#F1F1F1" }}> {position.toUpperCase()}</h3>
            </>
          )}
          {position === "down" && (
            <>
              <ArrowDownwardIcon style={{ color: "#F1F1F1" }} />
              <h3 style={{ color: "#F1F1F1" }}> {position.toUpperCase()}</h3>
            </>
          )}
        </div>
      </div>
      <div>
        <h3 style={{ color: "#F1F1F1", fontSize: 19 }}>Wager</h3>
        <input
          style={{
            border: "none",
            fontSize: 29,
            height: 60,
            borderRadius: 10,
            outline: "none",
            width: "-webkit-fill-available",
          }}
          type="text"
        />
      </div>
    </div>
  );
};

export default BackCard;
