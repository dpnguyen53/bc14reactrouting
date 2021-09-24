import React from "react";

export default function Cat(props) {
  const mouse = props.mouse;
  return (
    <img
      src="/cat.jpeg"
      style={{ position: "absolute", left: mouse.x, top: mouse.y }}
    />
  );
}
