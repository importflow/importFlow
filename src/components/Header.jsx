import React from 'react';
import {Search} from "./Search.jsx";
import {AccountNavbar} from "./AccountNavbar.jsx";
import {NotificationNavbar} from "./NotificationNavbar.jsx";

export const Header = () => {
  return (
    <>
      <Search></Search>
      <NotificationNavbar></NotificationNavbar>
      <AccountNavbar></AccountNavbar>
    </>
  )
}
