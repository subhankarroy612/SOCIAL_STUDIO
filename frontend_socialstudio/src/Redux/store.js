import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk'
import  { authReducer }  from './authReducer/reducer'
import { homeReducer } from './homeReducer/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    home: homeReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))