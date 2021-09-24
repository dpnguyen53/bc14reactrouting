import React from "react";
// import Mouse from "./Mouse";
// import MouseWithCat from "./MouseWithCat";
import Cat from "./Cat";
import WithMouse from "./WithMouse";

const WrapperMouse = WithMouse(Cat);

export default class MouseTracker extends React.Component {
  //   getXY = (mouse) => {
  //     return <Cat mouse={mouse} />;
  //   };

  render() {
    return (
      <>
        {/* <Mouse render={(mouse) => <Cat mouse={mouse} />} /> */}
        {/* <MouseWithCat /> */}

        <WrapperMouse />
      </>
    );
  }
}
