import React, { useReducer } from "react";

const initalState = { number: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { number: state.number - 1 };

    case "increment":
      return { number: state.number + 1 };

    default:
      return { ...state };
  }
};

export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <h1>Demo useReducer</h1>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement (-)
      </button>
      <span>Number: {state.number}</span>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment (+)
      </button>
    </div>
  );
}
