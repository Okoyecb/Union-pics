import React from "react";
import "./card.css";


const Card = props => {
  return (
    <div>
    <div className="card-wrap">
          {/* <div className="card">
            <img src={props.image} className="card-img" alt=""/>
            <div>
              <div className="full">
              </div>
              <div className="left">
                <p className="subtitle">{props.subtitle}</p>
                <p className="item">{props.item}</p>
              </div>
            </div>
          </div> */}
          <div className="row">
        <a className="lightbox" href="#photo01">
          <figure className="photo01"><p /></figure>
        </a>
        <div className="left">
                <p className="subtitle">{props.subtitle}</p>
                <p className="item">{props.item}</p>
              </div>
        <div className="lightbox-target" id="photo01">
          <div className="container">
            <img src="https://images.unsplash.com/photo-1518360192974-cb111fe33162?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=176a2e53640da93f024168ee870e4ab2" alt=""/>
            <a className="lightbox-close" href="#">X</a>
          </div>
        </div>
        <a className="lightbox" href="#photo02">
          <figure className="photo02"><p></p></figure>
        </a>
        <div className="lightbox-target" id="photo02">
          <div className="container">
            <img src="https://images.unsplash.com/photo-1524593216312-e3ea9ac26f97?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=40ea56ea3a1751a2c61ce161705e4dc0" alt="" />
            <a className="lightbox-close" href="">X</a>
          </div>
        </div>
        <a className="lightbox" href="#photo03">
          <figure className="photo03"><p></p></figure>
        </a>
        <div className="lightbox-target" id="photo03">
          <div className="container">
            <img src="https://images.unsplash.com/photo-1511044231743-fa5f76110c08?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=39af28e4d30f32989009e6f18fa8aac7" alt="" />
            <a className="lightbox-close" href="#">X</a>
          </div>
        </div>
      </div>
        </div>
       
    </div>
    
  );
};

export default Card;
