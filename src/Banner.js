import React from 'react';
import './Banner.css';
import {Button} from '@material-ui/core';

function Banner() {
    return (
        <div className="banner">

            <div className="banner_info">

                <h1>Get out and stretch your imagination</h1>

                <h5>Plan a different kind of gateway to uncover the hidden
                    gemns near you
                </h5>

                <Button variant="outlined">Explore Nearby</Button>

            </div>

         
        </div>
    )
}

export default Banner