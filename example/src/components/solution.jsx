import React, { Component } from 'react';


class Solution extends Component {
    state = {  
        solutions:[
            {number: 1164, title: "加工零件1",views:2930},
            {number: 1165, title: "加工零件2",views:2931},
            {number: 1166, title: "加工零件3",views:2932},
            {number: 1167, title: "加工零件4",views:2933},
            {number: 1168, title: "加工零件5",views:2934},
            {number: 1169, title: "加工零件6",views:2935},
            {number: 1170, title: "加工零件7",views:2936},
            {number: 1171, title: "加工零件8",views:2937},
        ]
    };

    handleDelete = (s)=>{
        const solutions=[...this.state.solutions,
            {number: 1172, title: "加工零件9",views:2938}
        ];
        this.setState({
            solutions:solutions,
        });
    }

    render() { 
        if(this.state.solutions.length===0){
            return(<h1> 没有题解了</h1>)
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>阅读</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.solutions.map(solution=>(
                        <tr key={solution.number}>
                            <td>{solution.number}</td>
                            <td>{solution.title}</td>
                            <td>{solution.views}</td>
                            <td><button onClick={()=> this.handleDelete(solution)} className='btn btn-danger'>删除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Solution;