import React, { useState } from "react";
import { errorValidate } from "../../Services/validate";
import "./Register.css"

const Register = () => {

const [user, setUser] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  password2:"",
})

const [userError, setUserError] = useState ({
  nameError: "",
  emailError: "",
  phoneError: "",
  passwordError: "",
  password2Error:"",
})

const handleChange = (event) => {

const {name, value} = event.target;
setUser (prevValue => {
  return {
  ...prevValue,
  [name] : value
}
})
}

const errorHandler = (event) => {
const {name, value} = event.target;
let error = "";
error = errorValidate (name, value);

if (event.target.name === "password2") {
  if (user.password !== user.password2) {
    error = "Write the same password"
  }
}

setUserError (prevValue => {
  return {
    ...prevValue, 
    [name + "Error"]: error,
  }
})

}

  return (
    <div className="registerPage">
      <h1>Register</h1>

<div className="logoRegister">
  {/* <img className ="logoDesign" src={} alt={} /> */}
</div>

<div className="registerInputs">
<input className={userError.nameError === "" ? "inputNormal" : "inputNormal inputError"} placeholder="Full name" type="text" name="name" onChange={handleChange} onBlur={errorHandler} />
<div className="errorMessage"> {userError.nameError}</div>
<input className={userError.emailError === "" ? "inputNormal" : "inputNormal inputError"} placeholder="Email" type="email" name="email" onChange={handleChange} onBlur={errorHandler}/>
<div className="errorMessage"> {userError.emailError}</div>
<input className={userError.phoneError === "" ? "inputNormal" : "inputNormal inputError"} placeholder="Phone number" type= "text" name="phone"  onChange={handleChange} onBlur={errorHandler}/>
<div className="errorMessage"> {userError.phoneError}</div>
<input className={userError.passwordError === "" ? "inputNormal" : "inputNormal inputError"} placeholder="Password" type="password" name="password" onChange={handleChange} onBlur={errorHandler} />
<div className="errorMessage"> {userError.passwordError}</div>
<input className={userError.password2Error === "" ? "inputNormal" : "inputNormal inputError"} placeholder="Repeat password" type="password" name="password2" onChange={handleChange} onBlur={errorHandler} />
<div className="errorMessage"> {userError.password2Error}</div>

<div className="registerButton">Register</div>

</div>

    </div>
  );
};

export default Register;

<section className="ourPrices">
<div className="pricesContainer">
  <div className="oneYearPriceContainer">
  <div className="OneYearPrice">
  <div className="oneYear"></div>
  <h2>Anual</h2>
  </div>

  <section className="oneYearPrices">
    <div className="oneYearPrices Container">
    <div className="Row">
      <div className="firstPrice Col sm={6} Col lg={4}">
      <p>468€</p>
      </div>
      </div>
      <div className="secondPrice">
      <p>238€</p>
        </div>

      <div className="onePayment">
        <div className="onePaymenttext">
        <h4>PAGO ÚNICO</h4>
        <p>Equivale a 19,9€/mes</p>

        </div>
      </div>

    <div className="saveButton">
      <div className="saveButton2">
        <div className="saveButton3">

        </div>
      </div>
    </div>
    </div>
  </section>
    
  <div className="oneYearPriceContainer">
  <div className="OneYearPrice">
  <div className="oneYear"></div>
  <h2>Anual</h2>
  </div>

  <section className="oneYearPrices">
    <div className="oneYearPrices Container">
    <div className="Row">
      <div className="firstPrice Col sm={6} Col lg={4}">
      <p>468€</p>
      </div>
      </div>
      <div className="secondPrice">
      <p>238€</p>
        </div>

      <div className="onePayment">
        <div className="onePaymenttext">
        <h4>PAGO ÚNICO</h4>
        <p>Equivale a 19,9€/mes</p>

        </div>
      </div>

    <div className="saveButton">
      <div className="saveButton2">
        <div className="saveButton3">

        </div>
      </div>
    </div>
    </div>
  </section>
    


  </div>

  </div>
</div>
</section>
