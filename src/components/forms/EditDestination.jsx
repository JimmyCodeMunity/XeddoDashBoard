import React, { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const EditDestination = () => {
  const { id } = useParams();
  const [location, setLocation] = useState("");
  const [destinations, setDestinations] = useState([]);

  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const getDestinationInfo = async () => {
    try {
      const response = await axios.get(
        `https://travelinkserver.vercel.app/api/v1/admin/getdestination/${id}`
      );
      console.log(response.data);
      setLocation(response.data.location);
    } catch (error) {
      console.log(error);
      toast.error("Error adding location");
      setLoading(false);
    }
  };

  useEffect(() => {
    getDestinationInfo();
  }, []);

  const updateDestination = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!location) {
      e.preventDefault();
      console.log("All fields are required");
      toast.error("Kindly fill all the inputs");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    // formData.append('file', file)

    try {
      const response = await axios.put(
        `https://travelinkserver.vercel.app/api/v1/admin/updatedestination/${id}`,
        {
          location,
        }
      );
      console.log(response);
      console.log("Location updated successfully");
      toast.success("Location updated successfully");
      setLoading(false);
      // Reset form fields after successful submission
      setLocation("");
      // getDestinations();
      getDestinationInfo();

      // setFile(null);
      // Optionally navigate to another page after successful submission
      navigation('/destinations');
    } catch (error) {
      console.log("Error Updating new location");
      console.log(error);
      toast.error("Error updating location");
      setLoading(false);
    }
  };

  //get all destinations
  // const getDestinations = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://travelinkserver.vercel.app/api/v1/admin/alldestinations"
  //     );
  //     const data = response.data;
  //     if (data.length > 0) {
  //       setDestinations(data);
  //       console.log(data);
  //     } else {
  //       console.log("No destinations found");
  //       toast.error("No destinations found");
  //     }
  //   } catch (error) {
  //     console.log("Erro fetching destinations");
  //     toast.error("Error fetching destinations");
  //   }
  // };

  // useEffect(() => {
  //   getDestinations();
  // }, []);
  return (
    <div>
      <div className="flex-1 flex-col justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
        <div className="justify-center items-center">
          <h3 className="text-white font-poppins">Add New Destination</h3>
        </div>
        <form
          action=""
          method="POST"
          onSubmit={updateDestination}
          encType="multipart/form-data"
        >
          <div class="relative z-0 md:w-[70%] w-full mb-5 group">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter destination
            </label>
          </div>

          <div className="relative w-full justify-center items-center mb-5 group">
            {loading ? (
              <button
                type="submit"
                className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
              >
                Updating Destination..
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md"
              >
                Update Destination
              </button>
            )}
          </div>
        </form>
      </div>

      {/* <div class="-m-1.5 overflow-x-auto px-10">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Destination Id
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                {destinations.map((dest) => {
                  return (
                    <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {dest._id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {dest.location}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white flex-row space-x-2">
                        <Link to="" className="bg-red-500 p-1 rounded-md">
                          Delete
                        </Link>
                        <Link
                          to={`/editdestination/${dest._id}`}
                          className="bg-green-500 p-1 rounded-md"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EditDestination;
