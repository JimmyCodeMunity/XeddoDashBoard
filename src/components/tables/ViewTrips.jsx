import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader";
import { Link ,useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const ViewTrips = () => {
  const [tripdata, setTripdata] = useState([]);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()

  const getTrips = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        "https://travelinkserver.vercel.app/api/v1/admin/alltrips"
      );
      const data = response.data;
      setTripdata(data);
      setLoading(false);
      // console.log(response.data)
      // toast.success("data fetched");
    } catch (error) {
      console.log(error);
      toast.error("error getting products");
      setLoading(false);
    }
  };


  //delete trip
  const deleteTrip = async (id) => {
    const result = await Swal.fire({
      title: "Do you really want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://travelinkserver.vercel.app/api/v1/admin/deletetrip/${id}`
        );
        toast.error("Product deleted");
        getTrips();
        navigate("/trips");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    getTrips();
  }, []);
  return (
    <div>
      {!loading ? (
        <div>
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        VehicleId
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Departure
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Destination
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        LeavesAt
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        ArrivesAt
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                    {tripdata.map((trip) => {
                      return (
                        <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            {trip.vehicleId}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            {trip.departure}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {trip.destination}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {trip.leavingTime}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {trip.arrivalTime}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex-row items-center space-x-3">
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-yellow-500 p-2 border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <Link to={`/edittrip/${trip._id}`}>Mark Complete</Link>
                            </button>
                            <button
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-green-500 p-2 border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none"
                            >
                              <Link to={`/edittrip/${trip._id}`}>Edit</Link>
                            </button>
                            <button
                            onClick={()=>deleteTrip(trip._id)}
                              type="button"
                              class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-red-500 p-2 border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      ):(
        <Loader/>
      )}
    </div>
  );
};

export default ViewTrips;
