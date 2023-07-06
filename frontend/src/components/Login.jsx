import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    console.log(name, value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };
    console.log(userData);
    axios
      .post("/login", userData)
      .then((response) => {
        console.log("hello");
        // Handle successful login
        console.log("Login successful:", response.data);

        localStorage.setItem("token", response.data.token);

        navigate("/courses");
      })
      .catch((error) => {
        console.log("hellof");

        console.log("Login failed:", error.response.data);
      });
  };

  return (
    <>
      <div className="nav d-flex justify-content-between p-3 ">
        <div className="search d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="40"
            fill="currentColor"
            className="bi bi-search pt-2 search-input "
            viewBox="0 0 16 28"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search 8000+ tutorials"
            className="search-input"
          />
        </div>
        <div className="logo d-flex justify-content-center">
          <h5>freeCodeCamp</h5>(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-fire"
            viewBox="0 0 16 16"
          >
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
          </svg>
          )
        </div>
        <div>
          <button className="btn text-white">Menu</button>
          <button
            className="btn btn-warning text-white"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </div>
      </div>
      <div className="main-login">
        <div className="">
          <form onSubmit={handleFormSubmit}>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating mb-2">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating  mb-2">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button
              type="submit"
              className="w-100 btn btn-lg btn-warning  mb-2"
            >
              Sign in
            </button>
            <button
              class="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={() => navigate("/register")}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
