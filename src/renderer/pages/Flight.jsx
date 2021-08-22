import React, { Component } from 'react';
import GoogleApiWrapper from './Maps';
import HUD from './components/HUD';

function Flight() {
    return(
        <>
            <GoogleApiWrapper/>
            <HUD/>
        </>
    );
}

export default Flight;
