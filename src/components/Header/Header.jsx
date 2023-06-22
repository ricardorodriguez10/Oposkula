import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";
import opoxlogo from "../../assets/opoxlogo.png"
const Header = () => {
  // let navigate = useNavigate();
  return (

<nav class="navbar navbar-expand-lg bg-body-tertiary">

<div className="logo">
<a href="#"><img className="logoImg" src={opoxlogo} alt="logo de Opox"></img></a>
  </div>

  <div class="container">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Servicios</a>
        <a class="nav-link" href="#">Precios</a>
        <a class="nav-link disabled">Contacto</a>
      </div>
    </div>
  </div>
</nav>
  );
};
export default Header;


//     <div className="headerPage">
//     {/* <div className="logo">
//       <img className="logoImg" src={opoxlogo} alt="Logo de Opox"></img>
//     </div> */}
//     <nav>
//     <ul className="nav-links">
//       <li
//         className="linkDesign"
//         onClick={() =>
//           setTimeout(() => {
//             navigate("/");
//           }, 250)
//         }
//       >
//         Home
//       </li>
      
//       <li
//         className="linkDesign"
//         onClick={() =>
//           setTimeout(() => {
//             navigate("/servicios");
//           }, 250)
//         }
//       >
//         Servicios
//       </li>

//       {/* <div
//         className="linkDesign"
//         onClick={() =>
//           setTimeout(() => {
//             navigate("./register");
//           }, 250)
//         }
//       >
//         Register
//       </div> */}

//       <li
//         className="linkDesign"
//         onClick={() =>
//           setTimeout(() => {
//             navigate("./contact");
//           }, 250)
//         }
//       >
//         Contacto
//       </li>
//       </ul>
//       </nav>
//     </div>
//   );
// };


