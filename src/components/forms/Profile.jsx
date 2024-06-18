import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const MyProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loggedUser = localStorage.getItem("user");
  const loggedemail = localStorage.getItem("email");


  // console.log("logged email is",loggedemail)

  //get userdata
  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://travelinkserver.vercel.app/api/v1/admin/admin/${loggedemail}`
      );
      // console.log(response.data[0].fullname);
      const data = response.data[0];
      // setUsername(response.data.data.username);
      setEmail(data.email);
      setFullname(data.fullname);
      // setPassword(response.data.data.password);
      // setAddress(response.data.data.address);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [loggedemail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(address);
  };

  const addUser = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!username || !email || !password) {
      e.preventDefault();
      console.log("All fields are required");
      toast.error("Kindly fill all the inputs");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    // formData.append('file', file)

    try {
      const response = await axios.post(
        "https://travelinkserver.vercel.app/api/v1/user/updateuser",
        {
          username,
          email,
          password,
          address,
        }
      );
      // console.log(response);
      console.log("User added successfully");
      toast.success("User added successfully");
      setLoading(false);
      // Reset form fields after successful submission
      setUsername("");
      setEmail("");
      setPassword("");
      // setFile(null);
      // Optionally navigate to another page after successful submission
      // navigation('/dashboard');
    } catch (error) {
      console.log("Error adding new user");
      console.log(error);
      toast.error("Error adding user");
      setLoading(false);
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("_uid");
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <div className="flex-1 md:flex-row md:flex flex-col-reverse justify-start items-start w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
        <div className="md:w-[60%]">
          <div className="justify-center items-center">
            <h3 className="text-white font-poppins my-5">My Profile</h3>
          </div>
          <form
            action=""
            method="POST"
            onSubmit={addUser}
            encType="multipart/form-data"
          >
            <div class="relative z-0 md:w-[60%] w-full mb-5 group">
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                FullName
              </label>
            </div>
            <div class="relative z-0 md:w-[60%] w-full mb-5 group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            
            <div class="relative z-0 md:w-[60%] w-full mb-5 group">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>

            <div className="relative w-full justify-center items-center mb-5 group">
              {loading ? (
                <button
                  type="submit"
                  className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
                >
                  Updating User..
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
                >
                  Update
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="md:w-[40%]">
          <div class="h-screen pt-12">
            <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div class="border-b px-4 pb-6">
                <div class="text-center my-4">
                  <img
                    class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                    src="https://randomuser.me/api/portraits/women/21.jpg"
                    alt=""
                  />
                  <div class="py-2">
                    <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                      {loggedUser}
                    </h3>
                    <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                      <svg
                        class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          class=""
                          d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                        />
                      </svg>
                      New York, NY
                    </div>
                  </div>
                </div>
                <div class="flex gap-2 px-2">
                  <button class="flex-1 rounded-full bg-blue-500 dark:bg-blue-500 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                    Follow
                  </button>
                  <button onClick={handleLogout} class="flex-1 bg-red-500 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
