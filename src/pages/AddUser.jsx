import React, { useState } from 'react';

import SideBar from '../components/SideBar';
import UserAdd from '../components/UserAdd';

const AddUser = () => {
    

    
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
                <UserAdd
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    displaySidebar={toggleSidebar}
                />
            </div>
        );
    
}

export default AddUser;
