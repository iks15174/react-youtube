import React from "react";

export default class ContactCreate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : "",
            phone : "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        let data = {};
        data[e.target.name] = e.target.value;
        this.setState(data);
    }

    handleClick(i){
        const newData = {
            name : this.state.name,
            phone : this.state.phone
        }
        this.props.onCreate(newData);

        this.setState({
            name : '',
            phone : ''
        })
    }

    render(){
        return(
            <div>
                <h2>Create Contact</h2>
                <input type="text" 
                name="name" 
                placeholder="name"
                value={this.state.name}
                onChange={this.handleChange}
                ></input>
                <input type="text" 
                name="phone" 
                placeholder="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                ></input>
                <button 
                onClick={this.handleClick}
                >CREATE</button>
            </div>
        )
    }
}