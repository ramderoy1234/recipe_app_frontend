import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [val, setVal] = useState(false);

  async function RegisterUser(e) {
    e.preventDefault();
    setVal(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
      setVal(false);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("User already registered");
      setVal(false);
    }
  }

  return (
    <div>
      <div class=" w-screen h-screen bg-gray-900 ">
        <div class="flex flex-col items-center justify-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div href="#" class="flex items-center mb-6 text-2xl font-semibold ">
            Register
          </div>
          <form
            class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
            onSubmit={(e) => RegisterUser(e)}
          >
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Register into your account
              </h1>
              <div class="space-y-4 md:space-y-6">
                <div>
                  <label class="block mb-2 text-sm font-medium ">
                    Your Username
                  </label>
                  <input
                    type="text"
                    class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Username"
                    required="true"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500focus:border-blue-500"
                    required="true"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button class="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Register
                </button>
                <p class="text-sm font-light text-white">
                  Already Have an account
                  <span
                    href="#"
                    class="font-medium ml-2 text-primary-600 hover:underline text-primary-500"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </form>
          {val && (
            <div role="status" className="mt-20">
              <svg
                aria-hidden="true"
                class="inline w-10 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
