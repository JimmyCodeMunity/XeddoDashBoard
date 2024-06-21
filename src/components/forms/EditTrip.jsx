import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const EditTrip = () => {
  const {id} = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null);
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [tripdate, setTripDate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [leavingTime, setLeavingTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [price, setPrice] = useState("");

  // Fetch locations
  useEffect(() => {
    axios
      .get("https://travelinkserver.vercel.app/api/v1/admin/alldestinations")
      .then((response) => {
        setLocations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

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

  const getTripData = async (e) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://travelinkserver.vercel.app/api/v1/admin/tripdata/${id}`
      );
      setDeparture(response.data.departure);
      setDestination(response.data.destination);
      setArrivalTime(response.data.arrivalTime);
      setLeavingTime(response.data.leavingTime);
      setPrice(response.data.price);
      setTripDate(response.data.tripdate);
      setSelectedVehicle(response.data.vehicleId);
      
      setLoading(false);
      console.log("collected user", response.data.username);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getTripData();
  }, []);

  const updateTrip = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !departure ||
      !destination ||
      !selectedVehicle ||
      !leavingTime ||
      !arrivalTime ||
      !price ||
      !tripdate
    ) {
      toast.error("Kindly fill all the inputs");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        `https://travelinkserver.vercel.app/api/v1/admin/updatetrip/${id}`,
        {
          departure,
          destination,
          vehicleId: selectedVehicle,
          leavingTime,
          arrivalTime,
          price,
          tripdate,
        }
      );
      console.log(response.data);
      console.log("Trip added successfully");
      toast.success("Trip added successfully");
      setLoading(false);
      // Reset form fields after successful submission
     
      // Optionally navigate to another page after successful submission
      // navigate('/dashboard');
    } catch (error) {
      console.log("Error adding new trip");
      console.log(error.message);
      
      toast.error("Error adding trip");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex-1 flex-col justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
        <div className="justify-center items-center">
          <h3 className="text-white font-poppins">Add New Trip</h3>
        </div>
        <form
          action=""
          method="POST"
          onSubmit={updateTrip}
          encType="multipart/form-data"
        >
          <div className="relative z-0 md:w-[70%] w-full mb-5 group">
            <label
              htmlFor="departure"
              className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              From
            </label>
            <select
              id="departure"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            >
              <option value="" disabled selected>
                Choose departure location
              </option>
              {locations.map((loc, index) => (
                <option key={index} value={loc.location}>
                  {loc.location}
                </option>
              ))}
            </select>
          </div>

          <div className="relative z-0 md:w-[70%] w-full mb-5 group">
            <label
              htmlFor="destination"
              className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              To
            </label>
            <select
              id="destination"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="" disabled selected>
                Choose destination
              </option>
              {locations.map((loc, index) => (
                <option key={index} value={loc.location}>
                  {loc.location}
                </option>
              ))}
            </select>
          </div>

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

          <div className="relative z-0 md:w-[70%] w-full mb-5 group">
            <label
              htmlFor="leavingTime"
              className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Leaving Time
            </label>
            <select
              id="leavingTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={leavingTime}
              onChange={(e) => setLeavingTime(e.target.value)}
            >
              <option value="" disabled selected>
                Choose leaving time
              </option>
              <option value="7:45 A.M">7:45 A.M</option>
              <option value="8:00 A.M">8:00 A.M</option>
              <option value="9:00 A.M">9:00 A.M</option>
              <option value="7:45 P.M">7:45 P.M</option>
              <option value="8:00 P.M">8:00 P.M</option>
              <option value="9:00 P.M">9:00 P.M</option>
            </select>
          </div>

          <div className="relative z-0 md:w-[70%] w-full mb-5 group">
            <label
              htmlFor="arrivalTime"
              className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Arrival Time
            </label>
            <select
              id="arrivalTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            >
              <option value="" disabled selected>
                Choose arrival time
              </option>
              <option value="5:45 A.M">5:45 A.M</option>
              <option value="8:00 A.M">8:00 A.M</option>
              <option value="9:00 A.M">9:00 A.M</option>
              <option value="7:45 P.M">7:45 P.M</option>
              <option value="8:00 P.M">8:00 P.M</option>
              <option value="9:00 P.M">9:00 P.M</option>
            </select>
          </div>

          <div class="relative max-w-sm z-0 md:w-[70%] w-full mb-5 group">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              datepicker
              type="date"
              value={tripdate}
              onChange={(e) => setTripDate(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
            />
          </div>

          <div className="relative z-0 md:w-[70%] w-full mb-5 group">
            <input
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer w-full"
              placeholder=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>

          <div className="relative w-full justify-center items-center mb-5 group">
            {loading ? (
              <button
                type="submit"
                className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
              >
                Creating Trip...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
              >
                Create Trip
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTrip;
