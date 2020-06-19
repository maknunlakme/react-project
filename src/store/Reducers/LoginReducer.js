const initState = {
    isLoggedIn: !!localStorage.getItem('jwt_token')
};

export default (state = initState, action) => {
    switch (action.type) {
        case'LOGIN':
            return {
                ...state, isLoggedIn: action.payload
            };
        default:
            return state;
    }
}
