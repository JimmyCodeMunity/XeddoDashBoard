import React, { useState } from 'react';
import StaffAdd from '../components/StaffAdd';
import SideBar from '../components/SideBar';

const AddStaff = () => {
    const [showSidebar, onSetShowSidebar] = useState(false);
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
            />
        </div>
    );
}

export default AddStaff;
