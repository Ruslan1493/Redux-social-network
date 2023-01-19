import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import { reducer as formReducer } from 'redux-form';

import thunkMiddleWare from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;