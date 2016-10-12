/**
 * Created by ruslan on 07.10.16.
 */
import {CombineReducers} from 'redux'

import {ADD_TAGS, DELETE_ALL_TAGS, DELETE_TAG} from '../actions/actions'

function listTags(state = [], action) {

    if (action.type === ADD_TAGS) {
        return [
            ...state, {
                text: action.text
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