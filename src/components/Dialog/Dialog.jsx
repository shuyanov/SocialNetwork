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


const Dialog = (props) => {
    let DialogsData = [
        { id: 1, user: "Max" },
        { id: 2, user: "CloneMax1" },
        { id: 3, user: "CloneMax2" },
        { id: 4, user: "CloneMax3" },
        { id: 5, user: "CloneMax4" }
    ]

    let MassagData = [
        { id: 1, massag: "Hello" },
        { id: 2, massag: "How are you" },
        { id: 3, massag: "Yop" },
        { id: 4, massag: "Watsap" },
        { id: 5, massag: "you good look" }
    ]

    let DialogElements = DialogsData.map(m => <DialogItem user={m.user} id={m.id} />)
    let MassagElements = MassagData.map(d => <MassagItems massages={d.massag} />)

    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogItems}>
                {DialogElements}
            </div>
            <div className={classes.MassagItems}>
                {MassagElements}
            </div>
        </div>
    )
}

export default Dialog;