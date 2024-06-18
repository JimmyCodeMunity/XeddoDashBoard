import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {
    const [name, setName] = useState('');
    const [plate, setPlate] = useState('');
    const [seats, setSeats] = useState('');
    const [loading,setLoading] = useState(false);

    // const navigation = useNavigate()

    const addVehicle = async (e) => {
        e.preventDefault();

        if (!name || !plate || !seats) {
            e.preventDefault();
            console.log("All fields are required");
            toast.error('Kindly fill all the inputs');
            return;
        }

        // const formData = new FormData();
        // for (let i = 0; i < file.length; i++) {
        //     formData.append('file', file[i]);
        // }

        // formData.append('productname', productname);
        // formData.append('price', price);
        // formData.append('description', description);

        try {
            const response = await axios.post('https://travelinkserver.vercel.app/api/v1/admin/createvehicle', {
                name,
                plate,
                seats,
            });
            // console.log(response);
            console.log("Vehicle added successfully");
            toast.success('Vehicle added successfully');
            // Reset form fields after successful submission
            setName('');
            setPlate('');
            setSeats('');
            setLoading(false);
            // Optionally navigate to another page after successful submission
            // navigation('/dashboard');
        } catch (error) {
            console.log("Error adding new vehicle");
            console.log(error);
            setLoading(false);
        }

    };

    return (
        <div>
            <div className="flex-1 flex-col justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
                <div className="justify-center items-center">
                    <h3 className="text-white font-poppins">Create Vehicle</h3>
                </div>
                <form onSubmit={addVehicle} encType="multipart/form-data">
                    <div className="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="productname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Vehicle Name" />
                    </div>
                    <div className="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={plate} onChange={(e) => setPlate(e.target.value)} type="text" name="plate" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Plate" />
                    </div>
                    <div className="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={seats} onChange={(e) => setSeats(e.target.value)} type="text" name="seats" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Seats" />
                    </div>

                    <div className="relative w-full justify-center items-center mb-5 group">
                        {
                            loading ? (
                                <button type="submit" className="bg-green-500 h-12 md:w-60 w-full text-white rounded-md">Creating Vehicle..</button>
                            ):(
                                <button type="submit" className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md">Create Vehicle</button>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductForm;
