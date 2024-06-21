import React, { useState } from 'react';

import SideBar from '../components/SideBar';

import NewDestination from '../components/NewDestination';

const AddDestination = () => {
    

    
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
                <NewDestination
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    displaySidebar={toggleSidebar}
                />
            </div>
        );
    
}

export default AddDestination;
