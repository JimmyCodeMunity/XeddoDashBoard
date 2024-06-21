import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';

const HomePage = () => {
    

    
        const [showSidebar, onSetShowSidebar] = useState(false);
        const [displayed,setDisplayed] = useState(false);
        // const displaySidebar = () =>{
        //     onSetShowSidebar(true);
        //     console.log("menu clicked")
        //     alert("menu clicked")
        // }
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
                <Content
                    onSidebarHide={() => {
                        onSetShowSidebar(false);
                    }}
                    // displaySidebar={() => {
                    //     onSetShowSidebar(true);
                    //     alert("sidebar should open")
                    // }}
                    showSidebar={showSidebar}
                    displaySidebar={toggleSidebar}
                    onSetShowSidebar={onSetShowSidebar}
                    
                />
            </div>
        );
    
}

export default HomePage;
