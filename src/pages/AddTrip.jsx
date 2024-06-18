import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import ProductAdd from '../components/ProductAdd';
import UserAdd from '../components/UserAdd';
import TripAdd from '../components/TripAdd';

const AddTrip = () => {
    

    
        const [showSidebar, onSetShowSidebar] = useState(false);
        return (
            <div className="flex">
                <SideBar
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    showSidebar={showSidebar}
                />
                <TripAdd
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                />
            </div>
        );
    
}

export default AddTrip;
