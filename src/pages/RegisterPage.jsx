import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  // const { login } = useContext(AuthContext);

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://travelinkserver.vercel.app/api/v1/admin/createadmin",
        { fullname, email, password }
      );
      const myuser = response.data;
      setUser(myuser);
      console.log(myuser);
      // const authToken = 'response';
      // navigate('/')
      console.log("info", response.data);
      console.log("token", response.data.token);
      localStorage.setItem("user", response.data.name);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("token", response.data.token); // Save token in local storage
      localStorage.setItem("logstate", "Authenticated"); // Save token in local storage
      navigate("/login", { replace: true });
      toast.success('Account created successfully');
      setLoading(false);
    } catch (error) {
      console.log("Authentication failed");
      console.log(error);
      toast.error('error creating user');
      setLoading(false);
    }
  };
  return (
    <section className="w-full grid items-center place-items-center flex-1 bg-black h-screen md:py-16 py-6">
      <div className="justify-center items-center">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto w-full">
          <div class="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div class="max-w-md mx-auto text-white">
              <form onSubmit={handleRegister}>
                <div class="mt-5">
                  <label
                    for="login"
                    class="font-semibold text-sm text-gray-400 pb-1 block"
                  >
                    Fullname
                  </label>
                  <input
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    id="login"
                    type="text"
                    class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                  />
                  <label
                    for="login"
                    class="font-semibold text-sm text-gray-400 pb-1 block"
                  >
                    E-mail
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="login"
                    type="text"
                    class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                  />
                  <label
                    for="password"
                    class="font-semibold text-sm text-gray-400 pb-1 block"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                    class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                  />
                </div>
                <div class="text-right mb-4">
                  <a
                    href="#"
                    class="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div class="flex justify-center items-center">
                  <div>
                    
                    <button type="submit" class="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4">
                      
                      {
                        loading ? (
                            <span class="ml-8">Creating Account...</span>
                        ):(
                            <span class="ml-8">Create Account</span>
                        )
                      }
                    </button>
                  </div>
                </div>
                
                <div class="flex items-center justify-between mt-4">
                  <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                  <a
                    href="#"
                    class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                  >
                    or sign up
                  </a>
                  <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
