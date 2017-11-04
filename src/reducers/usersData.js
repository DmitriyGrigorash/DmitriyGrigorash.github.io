import { ADD_USER_DATA, ADD_MANY_USERS } from '../actions/actions';

export function usersData (state = {users: []}, action) {
    switch (action.type) {
        case ADD_USER_DATA:
            return Object.assign({}, state, { users: [
                        ...state.users,
                        { ...action.payload }
                   ]
                }
            );
        case ADD_MANY_USERS:
            return Object.assign({}, state, { users: state.users.concat(action.payload) }
            );
        default:
            return state;
    }
}

