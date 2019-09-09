import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './footer.css';



export default class Footer extends React.Component{  
    render(){
      return (
        <Router>
            <p className="footer">
              <Link to={'/'} className="Arr"> All Rights Reserved </Link>
              <Link to={'/'} className="TC"> Terms and Conditions </Link>
              <Link to={'/'} className="disclaimer"> Disclaimer </Link>
              <Link to={'/'} className="Policy"> Privacy Policy </Link>
              <Link to={'/'} className="faq"> FAQs </Link>
            </p>
        </Router>
      ); 
    }
  }

