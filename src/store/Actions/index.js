import Axios from 'axios';

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

export const getSalesData = () => {
    return async (dispatch) => {
        await Axios.get('http://frontend.interview.dingi.work/user/data/',
            {headers: {Authorization: 'JWT ' + localStorage.getItem('jwt_token')}})
            .then((res) => {
                console.log('sales data: ', res);
                dispatch({type: 'GET_SALES_DATA', payload: res.data});
            }).catch((err) => {
                console.log('get sales data error: ', err);
            });
    }
};

