
import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/Md';
import { Link } from 'react-router-dom';
import { SidebarData, MoreSideData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Nav.global.css';

export default function Navbar() {

    // Set toggle show sidebar when FaBars clicked

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [sidemore, setSidemore] = useState(false);

    const showMore = () => setSidemore(!sidemore);


    return (
        <>
                {/* Button Bars  */}
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>

             <IconContext.Provider value={{color: 'white', size: "20px"}}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>
                                        {item.title}
                                    </span>
                                    <MdIcons.MdExpandMore className="arrow" onMouseEnter={showMore}/>
                                </Link>
                            </li>
                         )
                        })}
                    </ul>
                </nav>
                <nav className={sidemore ? 'more-side active' : 'more-side'}>
                      <ul className='more-side-menu'>
                        {MoreSideData.map((item, index) => {
                          return (
                            <li key={index} className={item.cName}>
                              {item.icon}
                              <span>
                                {item.title}
                              </span>

                            </li>
                          )
                        })}
                    </ul>
                </nav>
              </IconContext.Provider>

        </>
    )
}
