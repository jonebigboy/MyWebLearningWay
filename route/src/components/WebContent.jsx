import React, { Component } from 'react';

import { useSearchParams } from 'react-router-dom';

class WebCotent extends Component {
    state = { 
        searchParams:this.props.params[0],
        setSearchParams:this.props.params[1],
    } 
    render() { 
        //console.log(this.state.searchParams.get('chapter'));
        return (
            <React.Fragment>
                <h1>web - {this.state.searchParams.get('chapter')}</h1>
                <div>内容</div>
            </React.Fragment>
            
        );
    }
}
 
export default (props) =>(
    <WebCotent
        {...props}
        params={useSearchParams()}
    />
);

