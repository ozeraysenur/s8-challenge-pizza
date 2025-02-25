import React from "react";
import mainLogo from "../../images/iteration-1-images/logo.svg";
import { useHistory } from "react-router-dom";

export default function MainPage() {

  const history = useHistory();

  function handleClick(){
    history.push("/orderPage");
  }

    return(
      <div className="main-container"
      >
          <img style={{paddingTop:"70px", width:"250px"}}src={mainLogo} alt="Anasayfa Logo" />
          <h1 className="main-title">KOD ACIKTIRIR <br/>PİZZA, DOYURUR</h1>
          <button className="hungry-btn" onClick={handleClick}>ACIKTIM</button>
      </div>
    );
}
