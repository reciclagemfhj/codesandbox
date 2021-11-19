import React from "react";
import Logo from "./svg/LogoKitchen.svg";
function Home() {
  return (
    <div className="HomeContainer">
      <img width="300px" src={Logo} alt="LogoHome" />
      <h1 className="HomeTitle">Instituto Culinario Mia cucina</h1>
    </div>
  );
}

export default Home;
