import React, { useCallback } from "react";
import reactImage from "../assets/react.svg";

const Gallery: React.FC = () => {
  return (
    <div>
      <img src={reactImage} className="logo react" alt="React logo" />
    </div>
  );
};

export default Gallery;
