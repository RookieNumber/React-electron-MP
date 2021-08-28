
import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { SidebarData} from './NavigatorData';
import { IconContext } from 'react-icons';
import './style/Nav.global.css';
import './style/HUD.global.css';
import { SubMenu } from './SubMenu';

export const Navbar = () => {

    // Set toggle show sidebar when FaBars clicked

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);




    return (
        <>
                {/* Button Bars  */}
                <div className="navbar">
                    <Link className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>

             <IconContext.Provider value={{color: 'white', size: "20px"}}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                  <div className='nav-menu-items'>
                      {SidebarData.map((item, index) => {
                          return (
                            <SubMenu item={item} key={index} />
                          )
                          })}
                    </div>
                </nav>

              </IconContext.Provider>



        </>
    )
}
