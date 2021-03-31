const SET_AUTH_ERRORS = "errors/SET_AUTH_ERRORS";

export const setAuthErrors = (errors) => ({
    type: SET_AUTH_ERRORS,
    errors,
});

const initialState = {
    auth: [],
};

export const errorReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_AUTH_ERRORS:
            {
                newState = {...state };
                newState.auth = action.errors;
                return newState;
            }
        default:
            return state;
    }
};