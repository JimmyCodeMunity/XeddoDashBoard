import React, { useState } from 'react';

import SideBar from '../components/SideBar';

import NewDestination from '../components/NewDestination';

const AddDestination = () => {
    

    
        const [showSidebar, onSetShowSidebar] = useState(false);
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
                />
            </div>
        );
    
}

export default AddDestination;
