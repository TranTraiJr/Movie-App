import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full h-screen">
      <img
        className="absolute hidden object-cover w-full h-full sm:block"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/0019a33b-65e2-4ebc-bfb3-2d0b23352b5c/VN-vi-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
      <div className="fixed z-50 w-full px-4 py-24">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
              />
              <button className="py-3 my-6 font-bold bg-red-600 rounded">
                Sign Up
              </button>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subcribed to Netflix?
                </span>{" "}
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

//test@gmail.com
//123456
