import React, { Component } from 'react';

class Box extends Component {
    // state = { 
    //     x:this.props.x,
    // } 

    // moveleft = (step) => {
    //     this.setState(preState => ({
    //         x:preState.box.x-step,
    //     }));
    // }

    // moveright = (step) => {
    //     this.setState(preState => ({
    //         x:preState.box.x+step,
    //     }));
    // }

    render() { 
        //console.log(this.props);//从上传到下面的数据
        return (
            <React.Fragment>
                
                <div style={this.getstyle()}>
                    x:{this.props.box.x}
                </div>
                <button onClick={this.props.onClickleft} className="btn btn-primary">left</button>
                <button onClick={this.props.onClickright} className='btn btn-secondary'>right</button>
                <button onClick={()=>this.props.onDelete(this.props.box.id)} className='btn btn-danger'>删除</button>
            </React.Fragment>
        );
    }
    getstyle(){
        let style={
            width:50,
            height:50,
            backgroundColor:"lightblue",
            color:"white",
            textAlign:"center",
            lineHeight:"50px",
            marginLeft:this.props.box.x,
        };
        return style;
    }
}
 
export default Box;