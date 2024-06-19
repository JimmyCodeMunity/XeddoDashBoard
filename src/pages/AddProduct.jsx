import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import ProductAdd from '../components/ProductAdd';

const AddProduct = () => {
    
    

    
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
                <ProductAdd
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    displaySidebar={toggleSidebar}
                />
            </div>
        );
    
}

export default AddProduct;
