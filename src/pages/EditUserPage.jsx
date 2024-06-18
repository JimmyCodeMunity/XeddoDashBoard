import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import ProductAdd from '../components/ProductAdd';
import UserAdd from '../components/UserAdd';
import UserEdit from '../components/UserEdit';

const EditUserPage = () => {
    

    
        const [showSidebar, onSetShowSidebar] = useState(false);
        return (
            <div className="flex">
                <SideBar
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    showSidebar={showSidebar}
                />
                <UserEdit
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                />
            </div>
        );
    
}

export default EditUserPage;

