export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
        case 'USER_LOGIN_REQUEST':
            return { loading: true };
        case 'USER_REGISTER_SUCCESS':
        case 'USER_LOGIN_SUCCESS':
            return { loading: false, userInfo: action.payload, isLoggedIn: true };
        case 'USER_REGISTER_FAIL':
        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};