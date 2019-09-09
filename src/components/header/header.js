import React from 'react';
import './header.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faSearch } from '@fortawesome/free-solid-svg-icons';



export default class Header extends React.Component{ 
 
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

    render(){
      return ( 
        <Router>
          <div>
            <nav className="navbar navbar-light">
              <div className="menu-handles">
                <FontAwesomeIcon icon={faBars} className="hamburger" onClick={this.showMenu} />
              </div>
              <div className="search-items">
              <input id="searchInput" className="searchReady" type="search" placeholder="SEARCH BY KEYWORD"/>
              <FontAwesomeIcon icon={faSearch} className="search" />
              </div>
              <Link to={'/'}><h2 className="union-title">Union<span className="union-faded">Pics</span></h2></Link>
              <form className="form-inline">
                <img src="https://res.cloudinary.com/okoyecb/image/upload/v1566900876/unionlogo_l2lqbb.png" className="union-logo" alt="" />
              </form>
            </nav>
            {
              this.state.showMenu
                ? (
                  <div className="menu" ref={(element) => { this.dropdownMenu = element; }}>
                    <ul className="drop-down-menu">
                      <li><Link to={''} className="list-item"> About </Link></li>
                      <li><Link to={''} className="list-item"> Gallery </Link></li>
                      <li><Link to={''} className="list-item"> Categories </Link></li>
                      <li><Link to={''} className="list-item"> Testing </Link></li>
                      <li><Link to={''} className="list-item"> Trial</Link></li>
                    </ul>

                  </div>
                )
                : (
                  null
                )
            }
          </div>
        </Router> 
      ) 
    }
  }

