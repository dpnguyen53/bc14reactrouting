import React from "react";
import "./style.css";
import { useMagicColor } from "./useMagicColor";

export default function Square() {
  const color = useMagicColor();

  return (
    <div className="square" style={{ backgroundColor: color }}>
      Square
    </div>
  );
}
