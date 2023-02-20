import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addDialogActionCreate, newUpdateDialogText } from '../../../redux/reducer-dialog';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialog from './Dialog';

let mapStateToProps = (state) => {
    return {
        DialogElements: state.DialogElements,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMassag: () => {
            dispatch(addDialogActionCreate());
        },
        newUpdateDialogText: (newText) => {
            dispatch(newUpdateDialogText(newText));
        },
    }
}


let AuthRedirectComponent = withAuthRedirect(Dialog) 
let mapStateToPropsForReduser = (state) => ({
    isAuth: state.AuthElement.isAuth
})
AuthRedirectComponent = connect(mapStateToPropsForReduser)(AuthRedirectComponent) 


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogContainer; 