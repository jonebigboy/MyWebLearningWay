import React, { Component } from 'react';
import Boxes from './boxes';
import Navbar from './navbar';
class App extends Component {
    state = { 
        boxes:[
            {id:1,x:1},
            {id:2,x:2},
            {id:3,x:3},
            {id:4,x:4},
        ]
    }
    
    handleDelete = (boxId) => {
        console.log(boxId);
        const boxes=this.state.boxes.filter(
            b=>b.id!==boxId
        );
        this.setState({boxes:boxes});
        
    }


    handleReset =() =>{
        const boxes=this.state.boxes.map( b=>{
            return {
                id :b.id,
                x: 0,
            }
        });
        this.setState({boxes});
        console.log(this.state);
    }

    moveleft = (box) => {
        const boxes= [...this.state.boxes];
        const k=boxes.indexOf(box);
        boxes[k].x--;
        this.setState({boxes});
    }

    moveright = (box) => {
        const boxes= [...this.state.boxes];
        const k=boxes.indexOf(box);
        boxes[k].x++;
        this.setState({boxes});
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar 
                    boxesCount={this.state.boxes.length}
                />
                <div className='container'>
                    <Boxes 
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.moveleft}
                        onClickRight={this.moveright}
                        onDelete={this.handleDelete}
                    />
                </div>
                
            </React.Fragment>
            
            
        );
    }
}
 
export default App;