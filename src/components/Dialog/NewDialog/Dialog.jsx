import React from 'react';
import classes from './Dialog.module.css';
import { NavLink } from "react-router-dom";
import { addDialogActionCreate, newUpdateDialogText } from '../../../redux/reducer-dialog';
import Massages from './NewMassag/Massages';
import DialogItem from './NewMassag/DialogItem';


const Dialog = (props) => {
    let dialogElements = props.dialogsData.map(m => <DialogItem user={m.user} id={m.id} />)
    let massagElements = props.massagsData.map(d => <Massages massages={d.massag}/>)
    let newMassag = React.createRef();

    let addMassag = () => {
        props.dispatch(addDialogActionCreate())
    };

    let newUpdateDialog = () => {
        let text = newMassag.current.value;
        let action = newUpdateDialogText(text);
        props.dispatch(action)
    };

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
                    value={props.RenderDialog}
                >
                </textarea>
                <button onClick={addMassag}>ADD</button>
            </div>
        </div>
    )
}

export default Dialog;