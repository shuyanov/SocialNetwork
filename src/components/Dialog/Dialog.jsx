import { DialogItem } from "../Atoms/DialogItem/DialogItem";
import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) =>
  isActive ? classes.active : classes.Dialog;

const MassagItems = (props) => {
  return <div className={classes.Massag}>{props.massages}</div>;
};

const Dialog = (props) => {
  let DialogElements = props.state.DialogsData.map((m) => (
    <DialogItem user={m.user} id={m.id} />
  ));
  let MassagElements = props.state.MassagData.map((d) => (
    <MassagItems massages={d.massag} />
  ));

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogItems}>{DialogElements}</div>
      <div className={classes.MassagItems}>{MassagElements}</div>
    </div>
  );
};

export default Dialog;
