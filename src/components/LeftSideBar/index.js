import React, { Component } from 'react';
import Header from "./Head"
import Nav from "./Nav"
import Footer from "./footer"

class MainMenu extends Component {
    render() {
        return (
            <div className="Left-side-bar" >
                <div className="nav-head">
                    <Header />
                </div>
                <div className="nav-body">
                    <Nav />
                </div>
                <div className="nav-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default MainMenu;