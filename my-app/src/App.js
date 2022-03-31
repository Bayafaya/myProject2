import React, { useEffect, useState } from "react";
import './style/app.css';
import { BrowserRouter as Router, Routes, Route, withRouter, Navigate } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/ui/navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoad, setLoad] = useState(true);
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setLoad(false);
  },[])
  
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoad,
    }}>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
