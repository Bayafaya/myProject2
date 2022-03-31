import React, { useContext } from "react";
import MyButton from "../components/ui/buttons/MyButton";
import MyInputs from "../components/ui/inputs/MyInputs";
import { AuthContext } from "../context";

const Login = () =>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e) =>{
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true');
    }
     return(
         <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInputs type= 'text' placeholder = 'Login'/>
                <MyInputs type= 'password' placeholder = 'Password'/>
                <MyButton>Sign In</MyButton>
            </form>
         </div>
       
     )
}
export default Login;