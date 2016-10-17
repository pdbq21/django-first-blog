/**
 * Created by ruslan on 04.10.16.
 */
import { createStore } from 'redux'//applyMiddleware
import rootReducer from '../reducers'

export default function configureStore(initialState){
    const store = createStore(rootReducer, initialState);


    return store
}

/*
Note:
    ? all imports
    ?
 */