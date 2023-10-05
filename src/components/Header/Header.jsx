import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";
const Header = () => {
  // let navigate = useNavigate();
  return (

<nav class="navbar navbar-expand-lg bg-body-tertiary">


  <div class="container">

    <div class="">
      <div class="navbar-nav">
        <a class="nav-link" aria-current="page" href="#">Inicio</a>
        <a class="nav-link" href="#">Nutrición para opositores</a>
        <a class="nav-link" href="/Register">Registro</a>
        <a class="nav-link" href="#">Contacto</a>
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


