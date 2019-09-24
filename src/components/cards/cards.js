import React from "react";
import "./card.css";


const Card = props => {
  return (
    <div>
    <div className="card-wrap">
          <div className="card">
            <img src={props.image} className="card-img" alt=""/>
            <div>
              <div className="full">
              </div>
              <div className="left">
                <p className="subtitle">{props.subtitle}</p>
                <p className="item">{props.item}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
};

export default Card;
