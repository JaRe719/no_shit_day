import React from 'react';
import "./Layout.scss";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      Ich bin das Layout

      <Outlet />
    </div>
  )
}

export default Layout
