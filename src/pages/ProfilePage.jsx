import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import ProductAdd from '../components/ProductAdd';
import UserAdd from '../components/UserAdd';
import ProfileComponent from '../components/ProfileComponent';

const ProfilePage = () => {
    

    
        const [showSidebar, onSetShowSidebar] = useState(false);
        return (
            <div className="flex">
                <SideBar
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    showSidebar={showSidebar}
                />
                <ProfileComponent
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                />
            </div>
        );
    
}

export default ProfilePage;
