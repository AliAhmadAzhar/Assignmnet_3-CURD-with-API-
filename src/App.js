// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./Login/LoginForm.jsx";
import Products from "./Products/AbstractProduct";
import Constants from "./Components/Constants";

function App() {
  const [isDivVisible, setDivVisibility] = useState(true);
  const [IsLogin, setIsLogin] = useState(false);

  const toggleDivVisibility = () => {
    setDivVisibility(!isDivVisible);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(Constants.ACCESS_TOKEN_KEY);
    if (accessToken) {
      setIsLogin(true);
    }
  }, [IsLogin]);

  const checkAuthenticity = (authenticity) =>
    setIsLogin(authenticity ? true : false);

  return (
    <div className="App">
      <div
        className={`LoginDiv ${isDivVisible ? "" : "hidden"}`} onClick={toggleDivVisibility}
      >
        <LoginForm checkAuthenticity={checkAuthenticity}/>
      </div>
      {IsLogin && <Products />}
    </div>
  );
}

export default App;
