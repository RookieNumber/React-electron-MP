import React, { Component } from 'react';

import { HUDlist } from './components/NavigatorData';
import './components/style/Background.global.css';

function HUD() {
    return(
        <>
            <div className="flight-hud">
              {HUDlist.map((item, index) => {
                return (
                  <div to={item.path} key={index} className={item.cName}>
                      <span>{item.title}</span>
                      <input type="checkbox" />
                  </div>
                )
              })}
            </div>
        </>
    );
}

export default HUD;
