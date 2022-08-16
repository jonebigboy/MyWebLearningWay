import React, { Component } from 'react';
import { connect } from 'react-redux/es/exports';

class Number extends Component {
    state = {  } 
    
    handleClick=()=>{
        this.props.concat("222");
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Number</h1>
                <div>{this.props.number}</div>
                <button onClick={this.handleClick}>添加</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps =(state,props)=>{
    return {
        number:state.number,
    }
};

const mapDispatchToProps ={
    concat: (c)=>{
        return {
            type:"concat",
            string:c,
        }
    }
};
 
export default connect(mapStateToProps,mapDispatchToProps)(Number);