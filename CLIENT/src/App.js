import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
// import Card from './components/Card/Card.jsx';
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import { useNavigate, useLocation } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    try {
      if (characters.find((c) => c.id === id)) {
        return alert("You are already looking for that character");
      }
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const [access, setAccess] = useState(false);

  const email = "jesib03@hotmail.com";
  const password = "121212";

  const navigate = useNavigate();

  const login = async (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
    const { email, password } = userData;
    const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
    window.alert(error.message);
    console.log(error);
  }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const { pathname } = useLocation();

  const [loggedIn, setLoggedIn] = useState(true); // Variable para rastrear el estado de inicio de sesión

  const logout = () => {
    setLoggedIn(false);
    navigate("/form"); // Establece el estado de inicio de sesión a falso
  };

  return (
    <div className="App">
      {pathname !== "/" && (
        <Nav onSearch={onSearch} loggedIn={loggedIn} logout={logout} />
      )}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
        {loggedIn ? null : logout}
      </Routes>
    </div>
  );
}

export default App;
