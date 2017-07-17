import React from 'react';

class PopUp extends React.Component{
    constructor(props) {
        super(props)
    }
    
    checkClass( isActive ){
		return isActive ? "pop_wrap active" : "pop_wrap"
	}

    render() {
        return (
            <ul className={this.checkClass(this.props.isActive)}>
                <li>item one</li>
                <li>item two</li>
                <li>item three</li>
            </ul>
        )
    }
}

export default PopUp;