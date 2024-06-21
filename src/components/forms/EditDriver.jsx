import React, { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const EditDriver = () => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const [file, setFile] = useState(null);
  const [service, setService] = useState("");
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  const updateDriver = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!username || !email || !phone || !service) {
      e.preventDefault();
      console.log("All fields are required");
      toast.error("Kindly fill all the inputs");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        `https://travelinkserver.vercel.app/api/v1/admin/updatedriver/${id}`,
        {
          username,
          email,
          phone,
          service,
        }
      );
      console.log(response);
      console.log("Driver updated successfully");
      toast.success("Driver updated successfully");
      setLoading(false);
    } catch (error) {
      console.log("Error updating driver");
      console.log(error);
      toast.error("Error updating driver");
      setLoading(false);
    }
  };

  //get driver details
  //get selected user data
  const getDriverInfo = async (e) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://travelinkserver.vercel.app/api/v1/admin/getdriver/${id}`
      );
      setUsername(response.data.username);
      setPhone(response.data.phone);
      setEmail(response.data.email);
      setService(response.data.service);
      setLoading(false);
      console.log("collected user", response.data.username);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDriverInfo();
  }, []);


  //updateDriver
  return (
    <div>
      <div className="flex-1 flex-col justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
        <div className="justify-center items-center">
          <h3 className="text-white font-poppins">Edit Driver</h3>
        </div>
        <form
          action=""
          method="POST"
          onSubmit={updateDriver}
          encType="multipart/form-data"
        >
          <div class="relative z-0 md:w-[70%] w-full mb-5 group">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div class="relative z-0 md:w-[70%] w-full mb-5 group">
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
          <div class="relative z-0 md:w-[70%] w-full mb-5 group">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
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
              Phone
            </label>
          </div>
          <div class="relative z-0 md:w-[70%] w-full mb-5 group">
            <input
              value={service}
              onChange={(e) => setService(e.target.value)}
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
              Service Number
            </label>
          </div>
          

          <div className="relative w-full justify-center items-center mb-5 group">
            {loading ? (
              <p className="text-green-500">Updating Driver....</p>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
              >
                Update Driver
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDriver;
