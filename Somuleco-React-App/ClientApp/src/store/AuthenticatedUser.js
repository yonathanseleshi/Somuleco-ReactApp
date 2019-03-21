const authenticateUser = 'Authenticated';
const unAuthenticateUser = 'UnAuthenticated';

const initialState = { isAuthenticated: false};

export const authenticatedUserActionCreators = {
    authenticate: () => ({ type: authenticateUser }),
    un_authenticate: () => ({ type: unAuthenticateUser })
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === authenticateUser) {
        return { ...state, isAuthenticated: true };
    }

    if (action.type === unAuthenticateUser) {
        return { ...state, isAuthenticated: false };
    }

    return state;
};
