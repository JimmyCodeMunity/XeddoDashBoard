import React, { useState } from 'react';

import SideBar from '../components/SideBar';
import VehicleAssign from '../components/VehicleAssign';

const VehicleAssignPage = () => {
    

    
        const [showSidebar, onSetShowSidebar] = useState(false);
        const toggleSidebar = () => {
            onSetShowSidebar(!showSidebar); // Toggle the current state
            
        };
        return (
            <div className="flex">
                <SideBar
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    showSidebar={showSidebar}
                />
                <VehicleAssign
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    displaySidebar={toggleSidebar}
                />
            </div>
        );
    
}

export default VehicleAssignPage;
