import React from 'react';
import classes from './Dialog.module.css';
import Massages from './NewMassag/Massages';
import DialogItem from './NewMassag/DialogItem';
import { Navigate } from 'react-router-dom';


const Dialog = (props) => {

    let state = props.DialogElements;

    let dialogElements = state.DialogsData.map(m => <DialogItem user={m.user} id={m.id} />)
    let massagElements = state.MassagData.map(d => <Massages massages={d.massag} />)
    let newMassag = React.createRef();

    let addMassag = () => {
        props.addMassag()
    };

    let newUpdateDialog = () => {
        let newText = newMassag.current.value;
        props.newUpdateDialogText(newText)
    };

    //if (!props.isAuth) return <Navigate  to="/login" />

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogItems}>
                {dialogElements}
            </div>
            <div className={classes.MassagItems}>
                {massagElements}
            </div>
            <div>
                <textarea
                    onChange={newUpdateDialog}
                    ref={newMassag}
                    value={state.newUpdateDialog}
                >
                </textarea>
                <button onClick={addMassag}>ADD</button>
            </div>
        </div>
    )
}

export default Dialog;