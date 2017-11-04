export const ADD_USER_DATA = 'ADD_USER_DATA';
export const ADD_MANY_USERS = 'ADD_MANY_USERS';

export const addUserData = (data) => {
    return {
        type: ADD_USER_DATA,
        payload: data,
    }
};

export const addUsers = (users) => {
    return {
        type: ADD_MANY_USERS,
        payload: users,
    }
};
