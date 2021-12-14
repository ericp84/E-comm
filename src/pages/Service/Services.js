import React, { useState } from "react";
import './Service.css'

import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

let eyeopen = <FontAwesomeIcon className="icons" icon={faEye} color="black"/>;
let closeeye = <FontAwesomeIcon className="icons" icon={faEyeSlash} color="black"/>

const Services = () => {
  const { register, handleSubmit } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  // condition ternaire visible/notvisible //
  let eye= passwordShown ? eyeopen : closeeye 

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const onSubmit = data => {
    console.log(data);
  };
  
  return (
    <div className="Signin">
    <input
      className="Inpt"
      name="username"
      type="text"
      placeholder="Username"
      required
      {...register("username")}
    />
    <div className="pass-wrapper">
      <input
        className="Inpt"
        placeholder="Password"
        name="password"
        type={passwordShown ? "text" : "password"}
        required
        {...register("password")}
        />
      <i onClick={togglePasswordVisiblity}>{eye}</i>
    </div>
    <button className="btn" type="submit" onClick={handleSubmit(onSubmit)}>
      Submit
    </button>
    {/* <div className="link">pas de compte ? cliquez ici pour en créer un</div> */}
  </div>
);
};
export default Services;