const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
        // {
        //     id: 0, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8m6FAOvQbiiSj7rh9SH9J8aCFc7k5nZsOiNMMeKSQ0Gp46d0VdIb2PHCJ3lQj6xJ6lM&usqp=CAU',
        //     fullname: 'Harry', followed: false, location: { city: 'London', country: 'UK' }
        // },
        // {
        //     id: 1, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8m6FAOvQbiiSj7rh9SH9J8aCFc7k5nZsOiNMMeKSQ0Gp46d0VdIb2PHCJ3lQj6xJ6lM&usqp=CAU',
        //     fullname: 'Andrew', followed: false, location: { city: 'Minsk', country: 'Belarus' }
        // },
        // {
        //     id: 2, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8m6FAOvQbiiSj7rh9SH9J8aCFc7k5nZsOiNMMeKSQ0Gp46d0VdIb2PHCJ3lQj6xJ6lM&usqp=CAU',
        //     fullname: 'Georgy', followed: false, location: { city: 'Sofia', country: 'Bulgaria' }
        // },
    ]
}

const usersReducer = (state = initialState, action) => {
    let stateCopy = { ...state, ...state.users };
    switch (action.type) {
        case FOLLOW:
            stateCopy.users.map(u => {
                if(u.id === action.userId){
                    u.followed = true;
                    return;
                }
            })
            return stateCopy;
        case UNFOLLOW:
            stateCopy.users.map(u => {
                if(u.id === action.userId){
                    u.followed = false;
                    return;
                }
            })
            return stateCopy;
        case SET_USERS:
            stateCopy.users = action.users;
            return stateCopy;
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;