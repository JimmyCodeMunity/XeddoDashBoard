import React, { useState } from 'react';

import SideBar from '../components/SideBar';

import DestinationEdit from '../components/DestinationEdit';

const EditDestinationPage = () => {
    

    
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
                <DestinationEdit
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    displaySidebar={toggleSidebar}
                />
            </div>
        );
    
}

export default EditDestinationPage;

