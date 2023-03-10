import React from "react";

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`${props.className} || ${classes['btn-template']}`}>
      {props.children}
    </button>
  )
};


export default Button;