import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import AllProducts from '../components/AllProducts';

const Products = () => {



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
            <AllProducts
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                displaySidebar={toggleSidebar}
            />
        </div>
    );

}

export default Products;
