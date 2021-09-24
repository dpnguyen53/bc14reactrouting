import React from "react";

export default function WithCard(Component) {
  return function () {
    return (
      <div className="card">
        <div className="card-header">Header</div>
        <div className="card-body">
          <Component />
        </div>
        <div className="card-footer text-muted">Footer</div>
      </div>
    );
  };
}
