import React from 'react';
import ReactDom from 'react-dom';

class FirstComponent extends React.Component {
	render() {
		return <div>Hello, {this.props.message}</div>
	}
}

ReactDom.render(<FirstComponent message="My first react app" />, document.getElementById('app'));