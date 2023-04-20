import React from "react";

const Profile = () => {
  return (
    <div className="profilePage">
      <h1>Profile</h1>

<div className="inputContainer">
  <input className="inputProfile" type="text" placeholder="Full Name" name="name" />
</div>

<div className="inputContainer">
  <input className="inputProfile" type="number" placeholder="Peso (kg)" name="weight"/>
</div>

<div className="inputContainer">
  <input className="inputProfile" type="number" placeholder="Altura (cm)" name="height" />
</div>
    </div>
  );
};

export default Profile;
