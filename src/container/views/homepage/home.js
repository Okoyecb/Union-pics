import React from 'react';
import Header from '../../../components/header/header';
import Body from '../../../components/body/body';
import Footer from '../../../components/footer/footer';
import './home.css';




const home = () => {
    return(
        <div className="Home">
            <header>
                <Header className="App-header" />
            </header>
            <main>
                <Body/>
            </main>
            <Footer /> 
        </div>
    );
}
export default home;