import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";

const Header = () => {
  let navigate = useNavigate();
  return (
    <ul className="headerPage">
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
  );
};

export default Header;
