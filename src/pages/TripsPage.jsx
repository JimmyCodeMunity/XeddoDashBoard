import React, { useState } from 'react';

import SideBar from '../components/SideBar';

import AllTrips from '../components/AllTrips';

const TripsPage = () => {



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
            <AllTrips
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                displaySidebar={toggleSidebar}
            />
        </div>
    );

}

export default TripsPage;
