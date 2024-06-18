import React from 'react';
import { Icon } from './Icon';
import { Graph } from './Graph';
import TopCountries from './TopCountries';
import Segmentation from './Segmentation';
import AddComponent from './AddComponent';
import { IconButton } from './IconButton';
import { NameCard } from './NameCard';
import Satisfication from './Satisfaction';
import { employeeData } from '../constants';
import NavBar from './NavBar';
import AddProductForm from './forms/AddProduct';
import AddUser from './forms/AddUser';
import StaffAddForm from './forms/StaffAddForm';

const StaffAdd = ({ onSidebarHide }) => {
    return (
        <div className="flex w-full">
            <div className="w-full h-screen hidden sm:block sm:w-40 xl:w-60 flex-shrink-0">
                .
            </div>
            <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
                <NavBar sidestate={onSidebarHide} />
                

                
                <div className="w-full p-2 lg:w-80 flex-1 justify-center">
                    <div className="rounded-lg bg-card overflow-hidden">
                        <StaffAddForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffAdd;
