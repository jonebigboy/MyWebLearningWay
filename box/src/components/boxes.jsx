import React, { Component } from 'react';
import Box from './box';
class Boxes extends Component {
    // state = { 
    //     boxes:[
    //         {id:1,x:1},
    //         {id:2,x:2},
    //         {id:3,x:3},
    //         {id:4,x:4},
    //     ]
    // }
    
    // handleDelete = (boxId) => {
    //     console.log(boxId);
    //     const boxes=this.state.boxes.filter(
    //         b=>b.id!==boxId
    //     );
    //     this.setState({boxes:boxes});
        
    // }

    // handleReset =() =>{
    //     const boxes=this.state.boxes.map( b=>{
    //         return {
    //             id :b.id,
    //             x: 0,
    //         }
    //     });
    //     this.setState({boxes});
    //     console.log(this.state);
    // }
    
    render() { 
        return (
            <React.Fragment>
                <button onClick={this.props.onReset} className='btn btn-dark'> Clear</button>
                {this.props.boxes.map(box => (
                    <Box  
                        key={box.id}
                        box={box}
                        onDelete={this.props.onDelete}
                        onClickleft={()=>this.props.onClickLeft(box)}
                        onClickright={()=>this.props.onClickRight(box)}
                    />
                        
                ))};
            </React.Fragment>
        );
    }
    // moveleft = (box) => {
    //     const boxes= [...this.state.boxes];
    //     const k=boxes.indexOf(box);
    //     boxes[k].x--;
    //     this.setState({boxes});
    // }

    // moveright = (box) => {
    //     const boxes= [...this.state.boxes];
    //     const k=boxes.indexOf(box);
    //     boxes[k].x++;
    //     this.setState({boxes});
    // }
}
 
export default Boxes;