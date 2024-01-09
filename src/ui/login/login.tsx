import { Link } from "react-router-dom";
import { Divider } from "../components/Divider";
import React from "react";
import { SignInWithGoogle } from "../components/buttons/sign_in_with_google";

export const LoginForm = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="w-auto p-5 rounded-md h-auto bg-slate-200">
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>
        <Divider height={5} />
        <div className="bg-white p-2 flex gap-1 items-center rounded-md">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            placeholder="Email Address"
            className="border-none outline-none bg-transparent"
            required
          />
        </div>
        <Divider height={5} />
        <React.Fragment>
          <div className="bg-white p-2 flex gap-1 items-center rounded-md">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              className="border-none outline-none bg-transparent"
              required
            />
          </div>
          <p className="flex justify-end font-light text-sm ">
            <Link to="reset-password">Forgot Password</Link>
          </p>
        </React.Fragment>
        <Divider height={5} />
        <button className="bg-blue-500 text-white w-full rounded-md leading-8 font-bold">
          Login
        </button>
        <Divider height={5} />
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </p>

        <Divider height={5} />
      </form>
      <SignInWithGoogle />
    </div>
  );
};
