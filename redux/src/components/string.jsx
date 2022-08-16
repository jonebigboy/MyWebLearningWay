import React, { Component } from 'react';
import { connect } from 'react-redux/es/exports';
class String extends Component {
    state = {  } 
    handleAddNumber=()=>{
        this.props.add(1);
    }
    handleSubNumber=()=>{
        this.props.sub(1);
    }

    render() { 
        return (
            <React.Fragment>
                <h1>string</h1>
                <div>{this.props.string}</div>
                <button onClick={this.handleAddNumber}>添加数字</button>
                <button onClick={this.handleSubNumber}>减少数字</button>
            </React.Fragment>
        );
    }
}
 

const mapStateToProps =(state,props)=>{
    return {
        string:state.string,
    }
}

const mapDispatchToProps ={
    add: (c)=>{
        return {
            type:"add",
            value:c,
        }
    },
    sub: (c)=>{
        return {
            type:"sub",
            value:c,
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(String);
