import React,{useState} from 'react';
import './Banner.css';
import {Button} from '@material-ui/core';
import Search from './Search';
import {Link} from "react-router-dom";

function Banner() {

    const [showSearch, setshowSearch] = useState(false);


    return (
        <div className="banner">

            <div className="banner_search"> 

             {
                 showSearch && < Search />
             }

                <Button onClick={()=>setshowSearch(! showSearch)} className="banner_searchButton" variant="outlined">
                   
                   {showSearch?"Hide":"Search Dates"}
                    
                    
                </Button>

            </div> 

            <div className="banner_info">

                <h1>Get out and stretch your imagination</h1>

                <h5>Plan a different kind of gateway to uncover the hidden
                    gemns near you
                </h5>

                <Link to="/search">
                <Button variant="outlined">Explore Nearby</Button>
                </Link>
            </div>

         
        </div>
    )
}

export default Banner
