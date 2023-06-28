import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./nav.module.css";
import { Link, useNavigate } from "react-router-dom";


function Nav(props) {
  const { onSearch, loggedIn, logout } = props;
  
  // const { pathname } = useLocation();
  // if (pathname === "/") {
  // return null;

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }
  
  return (
    <nav className={style.container}>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <button>About</button>
      </Link>
      <br />
      <Link to="/home">
        <button>Home</button>
      </Link>
      {loggedIn ? (
          <li>
            <button onClick={handleLogout}>Log out</button>
          </li>
        ) : null}
    </nav>
  );
}

export default Nav;
