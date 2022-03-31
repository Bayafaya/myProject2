import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
// import About from "../pages/About";
// import Error from "../pages/Error";
// import PostIdPage from "../pages/PostIdPage";
// import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router/route";


const AppRouter = () => {
      const {isAuth,isLoad} = useContext(AuthContext);
      if(isLoad){
        return <h1 style={{ textAlign: 'center' }}>Loading ...</h1>
      }
  return (
    isAuth
      ? <Routes>
        {privateRoutes.map(route =>
          <Route key={route.path} path={route.path} element={<route.component />} />
        )}
        <Route path="/*" element={<Navigate replace to="/posts" />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route key={route.path} path={route.path} element={<route.component />} />
        )}
        <Route path="/*" element={<Navigate replace to="/login" />} />
      </Routes>
   
)
}
export default AppRouter;