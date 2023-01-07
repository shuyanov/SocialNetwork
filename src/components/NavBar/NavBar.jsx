import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
          <a href='/profile'> Profile </a>
        </div>
        <div className={classes.item}>
          <a href='/dialog'> Massage </a>
        </div>
        <div className={classes.item}>
          <a> Music </a>
        </div>
        <div className={classes.item}>
          <a> Setting </a>
        </div>
      </nav>
    )
}

export default NavBar;