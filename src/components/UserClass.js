import React from "react";


class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
        };
    }
    render()
    {
        return(
        <div className="user-card">
        <h2> Name: {this.props.name}</h2>
        <h3>Location: Delhi</h3>
        <h3> Contact: aditisharma270702@gmail.com</h3>
        <button className="count-btn" onClick={()=>{
            this.setState({
                count: this.state.count+1,
            })
        }}>Increment the count</button>
        <h4>Count:{this.state.count}</h4>
        </div>
        );
    }
}

export default UserClass;