import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";
import opoxlogo from "../../assets/opoxlogo.png"
const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="headerPage">
    <div className="logo">
      <img className="logoImg" src={opoxlogo} alt="Logo de Opox"></img>
    </div>
    <nav>
    <ul className="nav-links">
      <li
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/");
          }, 250)
        }
      >
        Home
      </li>
      
      <li
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/servicios");
          }, 250)
        }
      >
        Servicios
      </li>

      {/* <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("./register");
          }, 250)
        }
      >
        Register
      </div> */}

      <li
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("./contact");
          }, 250)
        }
      >
        Contacto
      </li>
      </ul>
      </nav>
    </div>
  );
};

export default Header;
