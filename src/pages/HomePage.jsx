import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';

const HomePage = () => {
    

    
        const [showSidebar, onSetShowSidebar] = useState(false);
        return (
            <div className="flex">
                <SideBar
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    showSidebar={showSidebar}
                />
                <Content
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                />
            </div>
        );
    
}

export default HomePage;
