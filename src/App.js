import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import LoginPage from './pages/LoginPage';
import AddUser from './pages/AddUser';
import AddStaff from './pages/AddStaff';
import Users from './pages/Users';
import Staff from './pages/Staff';
import Products from './pages/Products';
import PrivateRoutes from './context/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from './pages/RegisterPage';
import AddTrip from './pages/AddTrip';
import AddDestination from './pages/AddDestination';
import ProfilePage from './pages/ProfilePage';
import EditUserPage from './pages/EditUserPage';
import EditVehiclePage from './pages/EditVehiclePage';
import EditTripPage from './pages/EditTripPage';
import EditDestinationPage from './pages/EditDestinationPage';
import TripsPage from './pages/TripsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path='/edituser/:id' element={<EditUserPage />}></Route>
          <Route path="/addtrip" element={<AddTrip />} />
          <Route path='/edittrip/:id' element={<EditTripPage />}></Route>
          <Route path="/addstaff" element={<AddStaff />} />
          <Route path="/users" element={<Users />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/staffs" element={<Staff />} />
          <Route path="/products" element={<Products />} />
          <Route path='/editvehicle/:id' element={<EditVehiclePage />}></Route>
          <Route path="/destinations" element={<AddDestination />} />
          <Route path='/editdestination/:id' element={<EditDestinationPage />}></Route>
          <Route path="/profile" element={<ProfilePage />} />

        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
