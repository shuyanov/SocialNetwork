import { NavLink } from 'react-router-dom';
import classes from './../Dialog.module.css';

const activeLink = ({ isActive }) => isActive ? classes.active : classes.Dialog;

const DialogItem = (props) => {
    let pathDialog = '/dialogs/' + props.id;

    return (
        <div className={classes.Dialog}>
            <NavLink to={pathDialog} className={activeLink}>{props.user}</NavLink>
        </div>
    )
}

export default DialogItem