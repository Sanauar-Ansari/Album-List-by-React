import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="nav_bar">
        <div>
          <img className="album_image" src="image.png" />
          <Link to="/" className="nav_first_heading">
            Album List
          </Link>
        </div>

        <Link to="/addalbum" className="nav_second_heading">
          <button> Add New Album</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
