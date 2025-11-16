import { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";

const Register = () => {
  const [initialEmail, setInitialEmail] = useState({
    email: "",
    password: "",
    name : ""
  });
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
          <p className="text-center mb-6">
            Enter your usename and password to login
          </p>
          <div className="mb-4">
            <label className="text-sm block font-semibold mb-2">Name</label>
            <input
              type="text"
              value={initialEmail?.name}
              onChange={(e) =>
                setInitialEmail((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full border p-2 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm block font-semibold mb-2">Email</label>
            <input
              type="email"
              value={initialEmail?.email}
              onChange={(e) =>
                setInitialEmail((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="w-full border p-2 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm block font-semibold mb-2">Password</label>
            <input
              type="password"
              value={initialEmail?.password}
              onChange={(e) =>
                setInitialEmail((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              className="w-full border p-2 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white mt-3 p-2 rounded-lg font-semibold hover:bg-gray-800 transition w-full"
          >
            Signup
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="flex flex-col justify-center h-full items-center">
          <img
            src={register}
            alt="register image"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
