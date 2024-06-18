import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import UserEdit from '../components/UserEdit';
import VehicleEdit from '../components/VehicleEdit';

const EditVehiclePage = () => {
    

    
        const [showSidebar, onSetShowSidebar] = useState(false);
        return (
            <div className="flex">
                <SideBar
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    showSidebar={showSidebar}
                />
                <VehicleEdit
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                />
            </div>
        );
    
}

export default EditVehiclePage;

