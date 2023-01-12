import classes from './NavBar.module.css'
import { NavLink } from "react-router-dom";

import FriendsIcons from './FriendsIcons.jsx/FriendsIcons';

const activeLink = ({ isActive }) => isActive ? classes.active : classes.item;

const NavBar = () => {
  return (
    <nav className={`${classes.nav}`}>
      <div className={classes.item}>
        <NavLink to='/profile' className={activeLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' className={activeLink}>Dialog</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' className={activeLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={activeLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/setting' className={activeLink}>Setting</NavLink>
      </div>
      <div className={classes.size}>
        <FriendsIcons></FriendsIcons>
      </div>
    </nav>
  )
}

export default NavBar;