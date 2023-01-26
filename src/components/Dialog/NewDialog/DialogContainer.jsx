import React from 'react';
import { connect } from 'react-redux';
import { addDialogActionCreate, newUpdateDialogText } from '../../../redux/reducer-dialog';
import Dialog from './Dialog';

let mapStateToProps = (state) => {
    return {
        DialogElements: state.DialogElements
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

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
export default DialogContainer;