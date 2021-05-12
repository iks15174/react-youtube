import React from "react";

export default class ContactDetail extends React.Component{
    render(){
        const blank = (
            <div></div>
        )
        const details = (
            <div>{this.props.contact.name} {this.props.contact.phone}</div>
        )
        const result = (this.props.isSelected != -1) ? details : blank;

        return(
            <div>
                {result}
            </div>
        )
    }
}

ContactDetail.defaultProps = {
    contact: {}
}