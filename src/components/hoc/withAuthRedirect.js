import React from "react"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.AuthElement.isAuth
    });

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}