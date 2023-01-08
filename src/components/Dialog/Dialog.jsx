import classes from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const activeLink = ({isActive}) => isActive ? classes.active : classes.Dialog; 

const Dialog = () => {
    return (
        <div className={classes.Dialogs}>
            <div className={classes.DialogItems}>
                <div className={classes.Dialog}>
                    <NavLink to='/dialogs/1' className={activeLink}>Max</NavLink>
                </div>
                <div className={classes.Dialog}>
                    <NavLink to='/dialogs/2' className={activeLink}> MaxClone1</NavLink>
                </div>
                <div className={classes.Dialog}>
                    <NavLink to='/dialogs/3' className={activeLink}> MaxClone2</NavLink>
                </div>
                <div className={classes.Dialog}>
                    <NavLink to='/dialogs/4' className={activeLink}> MaxClone3</NavLink>
                </div>
                <div className={classes.Dialog}>
                    <NavLink to='/dialogs/5' className={activeLink}> MaxClone4</NavLink>
                </div>
            </div>
            <div className={classes.MassagItems}>
                <div className={classes.Massag}>Massag1</div>
                <div className={classes.Massag}>Massag223</div>
                <div className={classes.Massag}>Massag234</div>
                <div className={classes.Massag}>Massag123</div>
                <div className={classes.Massag}>Massag123</div>
            </div>
        </div>
    )
}

export default Dialog;