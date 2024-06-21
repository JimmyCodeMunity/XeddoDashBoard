import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AssignDriverVehicle = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null);
  
  const [selectedVehicle, setSelectedVehicle] = useState("");
  

  

  // Fetch vehicles
  useEffect(() => {
    axios
      .get("https://travelinkserver.vercel.app/api/v1/admin/getvehicles")
      .then((response) => {
        setVehicles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  


  const assignVehicle = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!selectedVehicle) {
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
            vehicleId: selectedVehicle,
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

//   const assignVehicle = async (e) => {
//     // console.log("date of trip",tripdate)
//     e.preventDefault();
//     setLoading(true);

//     if (
//       !selectedVehicle
//     ) {
//       toast.error("Kindly fill all the inputs");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/v1/admin/createtrip/${id}`,
//         {
          
          
//         }
//       );
//       // console.log(response.data);
//       // console.log("Trip added successfully");
//       toast.success("Trip added successfully");
//       setLoading(false);
//       // Reset form fields after successful submission
      
//       // Optionally navigate to another page after successful submission
//       // navigate('/dashboard');
//     } catch (error) {
//       console.log("Error adding new trip");
//       console.log(error.message);
//       if ((error.message = "Request failed with status code 400")) {
//         toast.error("Vehicle already assigned trip");
//       }
//       toast.error("Error adding trip");
//       setLoading(false);
//     }
//   };

  return (
    <div>
      <div className="flex-1 flex-col justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
        <div className="justify-center items-center">
          <h3 className="text-white font-poppins">Assign vehicle</h3>
        </div>
        <form
          action=""
          method="POST"
          onSubmit={assignVehicle}
          encType="multipart/form-data"
        >
          

          <div className="relative z-0 md:w-[70%] w-full mb-5 group">
            <label
              htmlFor="vehicle"
              className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Choose Vehicle
            </label>
            <select
              id="vehicle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
            >
              <option value="" disabled selected>
                Choose a vehicle
              </option>
              {vehicles.map((car, index) => (
                <option key={index} value={car._id}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          

          <div className="relative w-full justify-center items-center mb-5 group">
            {loading ? (
              <button
                type="submit"
                className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
              >
                Assigning Vehicle...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
              >
                Assign Vehicle
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignDriverVehicle;
