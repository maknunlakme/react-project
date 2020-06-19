export const loginUpdate = (value) => {
    return async (dispatch) => {
        await dispatch({type: 'LOGIN', payload: value})
    }
};

export const dashboardNavigate = (value) => {
    return async (dispatch) => {
        await dispatch({type: 'DASHBOARD', payload: value})
    }
};

export const salesNavigate = (value) => {
    return async (dispatch) => {
        await dispatch({type: 'SALES', payload: value})
    }
};

