import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import AllStaff from '../components/AllStaff';

const Staff = () => {



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
            <AllStaff
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                displaySidebar={toggleSidebar}
            />
        </div>
    );

}

export default Staff;
