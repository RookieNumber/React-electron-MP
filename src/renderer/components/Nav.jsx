
import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Nav.global.css';

export default function Navbar() {

    // Set toggle show sidebar when FaBars clicked

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>
                {/* Button Bars  */}
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>

             <IconContext.Provider value={{color: 'rgb(66, 66, 66)'}}>
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
                                </Link>
                            </li>
                         )
                        })}
                    </ul>
                </nav>
              </IconContext.Provider>

        </>
    )
}
