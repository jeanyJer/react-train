import React from 'react';
import { connect } from 'react-redux';
import { setPop } from '../action';
import PopUp from './PopUp';

class NavTop extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <ul>
                    <li className="first_li" onClick={this.props.setPop}>成为房东</li>
                    <li>协助</li>
                    <li>注册</li>
                    <li>登录</li>
                </ul>
                <PopUp isActive={this.props.isActive}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log('state', state);
  return {
    isActive: state
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPop: () => (dispatch(setPop()))
    }
}

const VisibleNavTop = connect(mapStateToProps, mapDispatchToProps)(NavTop);

export default VisibleNavTop;
