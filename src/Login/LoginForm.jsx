import React, { useState, useEffect } from "react";
import ApiClient from "../Components/ApiClient.jsx";
import { useMutation } from "react-query";
import Loader from "../Components/LoderComp.jsx";
import Constants from "../Components/Constants.js";

const LoginForm = ({ checkAuthenticity }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);  
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const accessToken = localStorage.getItem(Constants.ACCESS_TOKEN_KEY);
    if (accessToken) {
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false)
    }
  }, [isLoggedIn]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem(Constants.ACCESS_TOKEN_KEY);
    setIsLoggedIn(false);
    checkAuthenticity(false);
    setInputValues({
      email: "",
      password: "",
    });
  };


  const Login = useMutation(async (data) => {
    try {
      const response = await ApiClient.post('/auth/login', data);
      console.log('API Response:', response);
      const access_token = response.access_token;
      localStorage.setItem(Constants.ACCESS_TOKEN_KEY, access_token);
      setIsLoggedIn(true);
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  }, { onSuccess: () => { checkAuthenticity(true); } });

  const handleLoginButton = async (data) => {
    Login.mutate(data);
  };

  if (Login.isLoading) {
    return <span>Logging in, please wait <Loader/></span>;
  }

  if (Login.isError) {
    return <span>Error: {Login.error.message}</span>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <span>You are logged in</span>
          <button  onClick={(e) => {
              e.stopPropagation();
              handleLogout();
            }}>Logout</button>
        </div>
      ) : (
        <div
          style={{
            marginTop: "150px",
            marginLeft: "150px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div className="LabelNField">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
              className="InputFields"
            />
          </div>
          <div className="LabelNField">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={inputValues.password}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
              className="InputFields"
            />
          </div>
          <button
            className="LoginButton"
            onClick={(e) => {
              e.stopPropagation();
              handleLoginButton(inputValues);
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
  
};

export default LoginForm;
