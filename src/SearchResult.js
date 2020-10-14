import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({img,location,title,description,stars,price,total}) {
    return (
        <div className="search_result">
            <img src={img} alt="" />
            
            <FavoriteBorderIcon className="search_resultheart"/>

            <div className="searchresult_info">

                 <div className="searchresult_infoto">

                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>

                </div>

                <div className="searchresult_infobottom">

                         <div className="stars">
                        
                        <StarIcon />
                        <p><strong></strong>{stars} </p>

                         </div>    

                         <div className="price">

                            <h2>{price}</h2>
                            <p>{total}</p>
                          </div>   

                </div>

            </div>

        </div>
    )
}

export default SearchResult
