import Dialog from "./NewDialog/Dialog"

const Massag = (props) =>{
    return(
        <div>
            <Dialog
                dispatch={props.dispatch}
                dialogsData = {props.state.DialogsData}
                massagsData = {props.state.MassagData}
                RenderDialog = {props.state.newUpdateDialog}
            />
        </div>
    )
}

export default Massag;