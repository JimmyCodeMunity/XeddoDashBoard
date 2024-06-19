import React from 'react';
import { Graph } from './Graph';
import TopCountries from './TopCountries';
import Segmentation from './Segmentation';
import AddComponent from './AddComponent';
import { NameCard } from './NameCard';
import Satisfication from './Satisfaction';
import NavBar from './NavBar';

const Content = ({ onSidebarHide,showSidebar,displaySidebar }) => {
    console.log("side satte",showSidebar)
    return (
        <div className="flex w-full">
            <div className="w-full h-screen hidden sm:block sm:w-40 xl:w-60 flex-shrink-0">
                .
            </div>
            <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
                <NavBar displaySidebar={displaySidebar} onSideBarHide={onSidebarHide} showSidebar={showSidebar} />
                
                        <NameCard/>
                

                <div className="w-full p-2 lg:w-2/3">
                    <div className="rounded-lg bg-card sm:h-80 h-60">
                        <Graph />
                    </div>
                </div>
                <div className="w-full p-2 lg:w-1/3">
                    <div className="rounded-lg bg-card h-80">
                        <TopCountries />
                    </div>
                </div>

                <div className="w-full p-2 lg:w-1/3">
                    <div className="rounded-lg bg-card h-80">
                        <Segmentation />
                    </div>
                </div>
                <div className="w-full p-2 lg:w-1/3">
                    <div className="rounded-lg bg-card h-80">
                        <Satisfication />
                    </div>
                </div>
                <div className="w-full p-2 lg:w-1/3">
                    <div className="rounded-lg bg-card overflow-hidden h-80">
                        <AddComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
