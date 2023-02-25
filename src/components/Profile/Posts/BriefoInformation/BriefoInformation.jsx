import React from "react";


class BriefoInformation extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    dieactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if( prevProps.status !== this.props.status ){
                this.setState({
                    status: this.props.status 
                })
        }
        
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => {this.activateEditMode()}}> {this.props.status || "No Status"} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur = {() => {this.dieactivateEditMode()}} autoFocus={true} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default BriefoInformation;