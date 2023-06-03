import SearchBar from '../SearchBar/SearchBar.jsx';
import style from '../Nav/nav.module.css';

function Nav(props) {
   const {onSearch} = props;
    return (
       <div className={style.container}>
          <SearchBar onSearch={onSearch} /> 
       </div>
    );
 }
 
 export default Nav;