import clsx from "clsx";
import { SidebarIcons } from "./SideBarIcons";
import { Link } from "react-router-dom";
export const MenuItem =({ item: { id, title, notifications,link }, onClick, selected }) => {
    return (
      <div
        className={clsx(
          'w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-start xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer',
          selected === id ? 'sidebar-item-selected' : 'sidebar-item',
        )}
        onClick={() => onClick(id)}
      >
        <SidebarIcons id={id} />
        <Link to={`${link}`} id={id} className={clsx("block xl:block ml-2",selected === id ? 'sidebar-item-selected':'sidebar-item')}>{title}</Link>
        <div className="block sm:hidden xl:block flex-grow" />
        {notifications && (
          <div className="flex sm:hidden xl:flex bg-pink-600  w-5 h-5 items-center justify-center rounded-full mr-2">
            <div className="text-white text-sm">{notifications}</div>
          </div>
        )}
      </div>
    );
  }