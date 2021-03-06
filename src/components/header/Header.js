import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      {/* space between */}
      {/* left children=  2 */}
      <div className="header__left">
        <MenuIcon />

        <Link to="/">
          <img
            className="header__logo"
            src="data:image/png;base64,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"
            alt=""
          />
        </Link>
      </div>

      {/* middle children 2 */}
      {/* search bar */}
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      {/* right children 4 */}
      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/43213197?v=4"
        />
      </div>
    </div>
  );
}

export default Header;
