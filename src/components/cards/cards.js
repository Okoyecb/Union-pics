import React from "react";
import "./card.css";
import download from '../cards/download.svg';
// import {Link} from 'react-router-dom';



const card = props => {
  return (
    <div>
    <div className="card-wrap">
      <div className="image" onClick={props.showLightbox}>
      <img src={props.image} className="card-img" alt=""/>
      </div>
            <div>
              <div className="full">
              </div>
              <div className="left">
                <p className="subtitle">{props.subtitle}</p>
                <p className="item">{props.item}</p>
              </div>
              <div className="right">
                <img src={download} className="download"  alt="Download Button"/>
              </div>
            </div>
        </div>
       
    </div>
    
  );
};

export default card;
