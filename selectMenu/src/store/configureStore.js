/**
 * Created by ruslan on 12.10.16.
 */
import { createStore } from 'redux' // add applyMiddleware for use middleware
import rootReducer from '../reducers/rootReducer'

export default function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState
        // add middleware here.
        // example: applyMiddleware(first_middleware, second_middleware, ...)
    );

    return store;
}