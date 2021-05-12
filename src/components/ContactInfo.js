import React from "react";

export default class ContactInfo extends React.Component{
    render(){
        return(
            <div onClick={this.props.click}>
                {this.props.contact.name}
            </div>
        )
    }
}