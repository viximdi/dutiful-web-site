import "./App.css";
//import "./header.module.css";
import Header from "./header";
import React from "react";
import Intro from "./intro";
import Main from "./main";
import Growth from "./growth_stat";
import Review from "./reviews";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Main />
      <Growth />
      <Review />
      <Footer />
    </>
  );
}

export default App;
