import React from 'react';
import classes from './Dialog.module.css';
import { NavLink } from "react-router-dom";


const activeLink = ({ isActive }) => isActive ? classes.active : classes.Dialog;

const DialogItem = (props) => {
    let pathDialog = '/dialogs/' + props.id;

    return (
        <div className={classes.Dialog}>
            <NavLink to={pathDialog} className={activeLink}>{props.user}</NavLink>
        </div>
    )
}

const MassagItems = (props) => {
    return (
        <div className={classes.Massag}>{props.massages}</div>
    )
}

let newMassag = React.createRef();

let addMassag = () => {
    let text = newMassag.current.value;
    alert(text);
}


const Dialog = (props) => {

    let DialogElements = props.state.DialogsData.map(m => <DialogItem user={m.user} id={m.id} />)
    let MassagElements = props.state.MassagData.map(d => <MassagItems massages={d.massag} />)

    return (
        <div className={classes.Dialogs}>
                <div className={classes.DialogItems}>
                    {DialogElements}
                </div>
                <div className={classes.MassagItems}>
                    {MassagElements}
                </div>
            <div>
                <textarea ref = {newMassag} ></textarea>
                <button onClick={addMassag} className={classes.button}>ADD</button>
            </div>
        </div>
    )
}

export default Dialog;