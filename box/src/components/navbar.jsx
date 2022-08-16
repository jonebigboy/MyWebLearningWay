import React, { Component } from 'react';

const Navbar = (props) => {
    return (  
        
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active"  href="/">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Boxes Count:{props.boxesCount}</a>
                </li>
            </ul>
            
    );
}
 
export default Navbar;

// class Navbar extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <React.Fragment>
//                 <ul className="nav nav-tabs">
//                     <li className="nav-item">
//                         <a className="nav-link active"  href="/">Active</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="/">Link</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="/">Link</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link disabled">Disabled</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link">Boxes Count:{this.props.boxesCount}</a>
//                     </li>
//                 </ul>
//             </React.Fragment>
//         );
//     }
// }
 
// export default Navbar;