const initState = {
    dashboard: true,
    sales: true
};

export default (state = initState, action) => {
    switch (action.type) {
        case'DASHBOARD':
            return {
                ...state, dashboard: action.payload
            };
        case'SALES':
            return {
                ...state, sales: action.payload
            };
        default:
            return state;
    }
}
