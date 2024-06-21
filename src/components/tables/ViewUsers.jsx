import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../Loader";
import { Link, useNavigate } from "react-router-dom";

const ViewUsers = () => {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://travelinkserver.vercel.app/api/v1/admin/allusers"
      );
      const data = response.data;
      setUserdata(data);
      // console.log(response.data)
      setLoading(false);
      // toast.success("data fetched");
    } catch (error) {
      console.log(error);
      toast.error("error getting users");
    }
  };

  const navigate = useNavigate();

  //delete user from the database
  const deleteUser = async (id) => {
    const result = await Swal.fire({
      title: "Do you really want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://travelinkserver.vercel.app/api/v1/admin/deleteuser/${id}`
        );
        toast.error("User deleted");
        getUsers();
        navigate("/users");
        
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {!loading ? (
        <div>
          <div class="items-center mb-4">
            <h1 className="text-white">All Users</h1>
          </div>
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
                          Name
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Address
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
                      {userdata.map((user) => {
                        return (
                          <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {user.username}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                              {user.email}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                              {user.phone}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                              {user.address}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex-row items-center space-x-2">
                              <Link to={`/edituser/${user._id}`}
                                type="button"
                                class="inline-flex bg-green-500 text-white p-2 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none"
                              >
                                Edit
                              </Link>
                              <button
                              onClick={() => deleteUser(user._id)}
                                type="button"
                                class="inline-flex bg-red-500 text-white p-2 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none"
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ViewUsers;
