import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const EditUser = () => {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // const [password, setPassword] = useState('');
    const [address, setAddress] = useState('')
    const [loading,setLoading] = useState(false);
    // const navigation = useNavigate()
    


    //get selected user data
    const getUser = async (e) => {
        setLoading(true)
        try {

            const response = await axios.get(`https://travelinkserver.vercel.app/api/v1/user/userdata/${id}`);
            setUsername(response.data.username);
            setAddress(response.data.address);
            setPhone(response.data.phone);
            setEmail(response.data.email);
            setLoading(false)
            console.log("collected user",response.data.username)

        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }

    }


    const updateUser = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {

            const response = await axios.put(`https://travelinkserver.vercel.app/api/v1/admin/updateuser/${id}`,{username,email,phone,address});
            
            setLoading(false)
            console.log("collected user",response.data.username);
            toast.success("User Updated successfully")
            getUser()

        } catch (error) {
            console.log(error)
            toast.error(error.message)
            

        }

    }
    useEffect(() => {
        getUser()
    }, [])

    
    return (
        <div>
            <div className="flex-1 flex-col justify-start items-center w-full bg-black sm:py-10 py-6 md:px-16 px-6 md:space-y-12">
                <div className="justify-center items-center">
                    <h3 className="text-white font-poppins">Add New User</h3>
                </div>
                <form action="" method="POST" onSubmit={updateUser} encType="multipart/form-data" >
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">FullName</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="numeric" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>
                    <div class="relative z-0 md:w-[70%] w-full mb-5 group">
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                    </div>
                    
                    
                    <div className="relative w-full justify-center items-center mb-5 group">
                        {
                            loading ? (
                                <button type="submit" className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md">Updating User..</button>
                            ):(
                                <button type="submit" className="bg-blue-500 h-12 md:w-60 w-full text-white rounded-md">Update User</button>
                            )
                        }
                    </div>
                </form>

            </div>
        </div>
    );

}

export default EditUser;
