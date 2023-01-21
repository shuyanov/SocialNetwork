const ADD_MASSAGE = 'ADD-MASSAGE';
const NEW_UPDATE_DIALOG_TEXT = 'NEW-UPDATE-DIALOG-TEXT';

const reducetDialog = (state, action) => {

    switch (action.type) {
        case ADD_MASSAGE: {
            let newMassag = {
                id: 6,
                massag: state.newUpdateDialog,
            };
            state.MassagData.push(newMassag);
            state.newUpdateDialog = '';
            return state;
        }
        case NEW_UPDATE_DIALOG_TEXT: {
            state.newUpdateDialog = action.newText;
            return state;
        }
        default: {
            return state;
        }

    }
}
export const addDialogActionCreate = () => ({ type: ADD_MASSAGE });
export const newUpdateDialogText = (text) => ({ type: NEW_UPDATE_DIALOG_TEXT, newText: text });

export default reducetDialog;