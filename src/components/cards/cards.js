import React from "react";
import "./card.css";
import {Link} from 'react-router-dom';



const card = props => {
  return (
    <div>
    <div className="card-wrap">
          <Link to={''} className="card lightbox">
            <img src={props.image} className="card-img"
              onClick={props.showLightbox} alt=""/>
            <div>
              <div className="full">
              </div>
              <div className="left">
                <p className="subtitle">{props.subtitle}</p>
                <p className="item">{props.item}</p>
              </div>
            </div>
          </Link>
        </div>
       
    </div>
    
  );
};

export default card;
