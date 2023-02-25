import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
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


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)
(Dialog)