import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ViewStaff = () => {
  const [userdata, setUserdata] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://travelinkserver.vercel.app/api/v1/admin/alldrivers"
      );
      const data = response.data;
      setUserdata(data);
      // console.log(response.data)
      // toast.success("data fectched");
    } catch (error) {
      console.log(error);
      toast.error("error getting users");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteDriver = async (id) => {
    const result = await Swal.fire({
      title: "Do you really want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://travelinkserver.vercel.app/api/v1/admin/deletedriver/${id}`
        );
        toast.success("Driver deleted");
        getUsers();
        // navigate("/products");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
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
                      Name
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
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Service
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
                          {user.phone}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {user.email}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {user.service}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex-row space-x-3 items-center">
                          <button
                            type="button"
                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-yellow-500 p-2 border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none"
                          >
                            <Link to={`/assignvehicledriver/${user._id}`}>Assign Vehicle</Link>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-green-500 p-2 border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none"
                          >
                            <Link to={`/editdriver/${user._id}`}>Edit</Link>
                          </button>
                          <button
                            onClick={() => deleteDriver(user._id)}
                            type="button"
                            class="inline-flex p-2 bg-red-500 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white cursor-pointer "
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
  );
};

export default ViewStaff;
