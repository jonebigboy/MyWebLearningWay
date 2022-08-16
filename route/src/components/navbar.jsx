import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                       
                        <Link className="navbar-brand" to="/" >讲义</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
            
                                <Link className="nav-link active" to="/linux" >Linux</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/django" >django</Link>
                            </li>
                            <li className="nav-item">  
                                <Link className="nav-link active" to="/web" >web</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" >Home</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default NavBar;