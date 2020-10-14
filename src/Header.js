import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import {Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">

       
<Link to="/">
            <img  
            
            
            className="icon_header" 
            src="https://i.pinimg.com/originals/1b/20/58/1b20588ad588cf694ce7af9197f3722d.jpg" 
            alt=""
            
            />
            
 </Link>
            <div className="header_center">

                <input type="text" />

                <SearchIcon />

            </div>

            <div className="header_right">

                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                < Avatar />


            </div>
       

    </div>

    )
}

export default Header
