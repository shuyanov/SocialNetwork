import React from "react";

export const DialogItem = (props) => {
    let pathDialog = "/dialogs/" + props.id;

    return (
        <div className={classes.Dialog}>
            <NavLink to={pathDialog} className={activeLink}>
                {props.user}
            </NavLink>
        </div>
    );
};