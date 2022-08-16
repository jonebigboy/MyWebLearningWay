import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Web extends Component {
    state = { 
        webs:[
            {id:1,titie:"HTML"},
            {id:2,titie:"CSS"},
            {id:3,titie:"JS"},
            {id:4,titie:"React"},
            {id:5,titie:"Vue"},
        ]
     } 
    render() { 
        return (
            <React.Fragment>
                <h1>Web</h1>
                <hr />
                <div>
                    {this.state.webs.map(web=>(
                        <div key={web.id}>
                            <Link to={`/web/content?chapter=${web.id}`}>{web.id+"."+web.titie}</Link>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}
 
export default Web;