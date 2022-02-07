import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Update from "./Update/Update"

const ContentController = () => {
  const contentRouter = () => {
      console.log("contentRouter");
      return(
        <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/update"  element={<Update/>}/>
      </Routes>
      )
    
  };
  return (
    <>
      {contentRouter()}
    </>
  );
};

export default ContentController;
