import React from "react";
import "./Register.css"

const Register = () => {
  return (
    <div className="registerPage">
      <h1>Register</h1>

<div className="logoRegister">
  {/* <img className ="logoDesign" src={} alt={} /> */}
</div>

<div className="registerInputs">
<div>
<input placeholder="Full name" type="text" name="name" />
</div>
<div>
<input placeholder="Email" type="email" name="email" />
</div>
<div>
<input placeholder="Phone number" type= "text" name="phone"/>
</div>
<div>
<input placeholder="Password" type="password" name="password" />
</div>
<div>
<input placeholder="Repeat password" type="password" name="password2" />
</div>

<div className="registerButton">Register</div>

</div>

    </div>
  );
};

export default Register;
