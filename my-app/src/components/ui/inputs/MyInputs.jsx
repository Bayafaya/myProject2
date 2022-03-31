import React from "react";
import classes from './MyInputs.module.css';

const MyInputs = (props) =>{
return(
    <input className={classes.MyInp} {...props}/>
)
}
export default MyInputs;