/**
 * Created by ruslan on 07.10.16.
 */
// constant  names ActionTypes
import {ADD_TAGS, DELETE_ALL_TAGS, DELETE_TAG} from '../actions/actions'


// initialSate:
// можна оголосити константою на початку або паметром по замовчуванню для кодного значення state;
/*
    Example:
const initialState = {
    text: ''
    };

    or

    function(state = {text: ''}, action)
 */


function listTags(state = {text: ''}, action) {

    if (action.type === ADD_TAGS) {
        return [
            ...state, {
                text: action.payload
            }
        ]
    }
    else if (action.type === DELETE_TAG) {
        return state.map((tag, index) => {
            if (index === action.index) {
                return Object.assign({}, tag, {
                    text: ''
                })
            }
            return tag;
        })
    }
    else {
        return state;
    }

}

export default listTags;