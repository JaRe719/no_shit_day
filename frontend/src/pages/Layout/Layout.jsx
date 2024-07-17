import React from "react";
import shitty from "../../assets/img/shitty.png";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <img src={shitty} alt="poop" />
        <p>No-Shit-Day</p>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
