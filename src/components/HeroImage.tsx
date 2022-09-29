import React from "react";

const HeroImageWrapper = ({ src }: { src: string }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={src} />
    </div>
  );
};

export default HeroImageWrapper;
