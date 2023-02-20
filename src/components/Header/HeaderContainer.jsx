import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getHeader} from '../../redux/reducer-auth'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getHeader();
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.AuthElement.isAuth,
    login: state.AuthElement.login,
})


export default connect(mapStateToProps,{getHeader})(HeaderContainer)