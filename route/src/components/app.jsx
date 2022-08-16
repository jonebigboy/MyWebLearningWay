import React, { Component } from 'react';
import NavBar from './navbar';
import Django from './django';
import Linux from './linux';
import Home from './home';
import Nofind from './404';
import Web from './web';
import {Routes,Route,Navigate} from 'react-router-dom';
import WebCotent from './WebContent';
class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                
                <div className='container'>
                   
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/linux" element={<Linux/>}></Route>
                        <Route path="/django" element={<Django/>}></Route>
                        <Route path="/web" element={<Web/>}></Route>
                        <Route path="/web/content" element={<WebCotent/>}></Route>
                        <Route path='/404' element={<Nofind/>}></Route>
                        <Route path='*' element={ <Navigate replace to="/404" /> }></Route>
                    </Routes>
                </div>
            
                
            </React.Fragment>
        );
    }
}
 
export default App;