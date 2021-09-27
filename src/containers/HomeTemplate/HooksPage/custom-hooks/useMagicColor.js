import { useState, useEffect } from "react";

function useMagicColor() {
  const [state, setState] = useState("blue");

  useEffect(() => {
    const interval = setInterval(() => {
      //0 -> 999999
      const newColor = Math.floor(Math.random() * 999999);
      setState(`#${newColor}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return state;
}

export { useMagicColor };
