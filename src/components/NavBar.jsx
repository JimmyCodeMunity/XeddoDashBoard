import React from 'react';
import { Icon } from './Icon';
import { IconButton } from './IconButton';

const NavBar = ({ onSidebarHide ,displaySidebar,showSidebar}) => {
    const username = localStorage.getItem('user');
    console.log("navbar state",!showSidebar)
    
    return (
        <div className="w-full sm:flex p-2 items-end">
            <div className="sm:flex-grow flex justify-between">
                <div className="">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold text-white">{username}</div>

                    </div>
                    <div className="flex items-center">
                        <Icon
                            path="res-react-dash-date-indicator"
                            className="w-3 h-3"
                        />
                        <div className="ml-2">October 26</div>
                    </div>
                </div>
                <IconButton
                    icon="res-react-dash-sidebar-open"
                    className="block sm:hidden"
                    onClick={displaySidebar}
                />
            </div>
            <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
                <Icon
                    path="res-react-dash-search"
                    className="w-5 h-5 search-icon left-3 absolute"
                />
                <form action="#" method="POST">
                    <input
                        type="text"
                        name="company_website"
                        id="company_website"
                        className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                        placeholder="search"
                    />
                </form>
            </div>
        </div>
    );
}

export default NavBar;
