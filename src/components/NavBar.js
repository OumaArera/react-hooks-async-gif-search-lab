import React from "react";
// const Url = "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

function NavBar({ color, title }) {
  const colors = {
    black: "navbar-inverse",
    white: "navbar-default",
  };

  return (
    <nav className={`navbar ${colors[color]}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{title}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
