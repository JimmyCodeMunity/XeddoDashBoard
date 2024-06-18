import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import AllStaff from '../components/AllStaff';
import AllProducts from '../components/AllProducts';

const Products = () => {



    const [showSidebar, onSetShowSidebar] = useState(false);
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
            />
        </div>
    );

}

export default Products;
