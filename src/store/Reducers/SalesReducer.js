const initState = {
    sales: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case'GET_SALES_DATA':
            return {
                ...state, sales: [...action.payload]
            };
        default:
            return state;
    }
}
