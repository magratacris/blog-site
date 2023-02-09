import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      {children}
    </Fragment>
  );
};
export default Layout;
