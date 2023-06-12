import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const { onSearch } = props;
  return (
    <div className={style.container}>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <button>About</button>
      </Link>
      <br />
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Nav;
