import React, { useState } from 'react';
import StaffAdd from '../components/StaffAdd';
import SideBar from '../components/SideBar';

const AddStaff = () => {
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
            <StaffAdd
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                displaySidebar={toggleSidebar}
            />
        </div>
    );
}

export default AddStaff;
