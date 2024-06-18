import React from 'react';
import NavBar from './NavBar';
import EditVehicle from './forms/EditVehicle';

const VehicleEdit = ({ onSidebarHide }) => {
    return (
        <div className="flex w-full">
            <div className="w-full h-screen hidden sm:block sm:w-40 xl:w-60 flex-shrink-0">
                .
            </div>
            <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
                <NavBar sidestate={onSidebarHide} />
                

                
                <div className="w-full p-2 lg:w-80 flex-1 justify-center">
                    <div className="rounded-lg bg-card overflow-hidden">
                        <EditVehicle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehicleEdit;
