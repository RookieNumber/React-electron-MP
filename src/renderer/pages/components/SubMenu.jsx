import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { fractalData } from './NavigatorData';
import './style/HUD.global.css';

export const SubMenu = ({item}) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const [frmenu, setFrmenu] = useState(false);

  const showFrmenu = () => setFrmenu(!frmenu);



  return (
    <>
     <div  onClick={item.subNav && showSubnav}>
        <Link to={item.path} className={item.cName}>
          {item.icon}
          <span>{item.title}</span>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </Link>
      </div>
    {subnav &&
        item.subNav.map((item, index) => {
          return (
            <>
            <Link to={item.path} key={index} className={item.cName} onClick={item.frMenu && showFrmenu}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
            </>
          );
        })}

    </>
  )
}


