import React from "react";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import Appfooter from "../Components/AppFooter/Appfooter.Component";

const MovieLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavbarComponent />
        <Component {...props} />
        <Appfooter />
      </div>
    );
  };

export default MovieLayout;
