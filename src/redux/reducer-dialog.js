const ADD_MASSAGE = 'ADD-MASSAGE';
const NEW_UPDATE_DIALOG_TEXT = 'NEW-UPDATE-DIALOG-TEXT';

let initialState = {
    newUpdateDialog: 'Write your massag',

    DialogsData: [
        { id: 1, user: "Max" },
        { id: 2, user: "CloneMax1" },
        { id: 3, user: "CloneMax2" },
        { id: 4, user: "CloneMax3" },
        { id: 5, user: "CloneMax4" },
    ],
    MassagData: [
        { id: 1, massag: "Hello" },
        { id: 2, massag: "How are you" },
        { id: 3, massag: "Yop" },
        { id: 4, massag: "Watsap" },
        { id: 5, massag: "you good look" },
    ],
}

const reducetDialog = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newText = state.newUpdateDialog;
            return {
                ...state,
                newUpdateDialog: '',
                MassagData: [...state.MassagData, { id: 6, massag: newText }],
            };
        case NEW_UPDATE_DIALOG_TEXT:
            return {
                ...state,
                newUpdateDialog: action.newText
            };
        default: {
            return state;
        }

    }
}
export const addDialogActionCreate = () => ({ type: ADD_MASSAGE });
export const newUpdateDialogText = (newText) =>
    ({ type: NEW_UPDATE_DIALOG_TEXT, newText: newText });

export default reducetDialog;