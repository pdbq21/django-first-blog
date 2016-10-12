/**
 * Created by ruslan on 06.10.16.
 */
/*
* Note:
*   this write action (type name: 'UPPER_CASE')
*
* */

// constant type action
// need for import in Reducers

export const ADD_TAGS = 'ADD_TAGS';
export const DELETE_TAG = 'DELETE_TAG';
export const DELETE_ALL_TAGS = 'DELETE_ALL_TAGS';



// generators actions

export const clickButton = text => ({
    type: 'ADD_TAGS',
    text
});

export const clickDeleteTag = id => ({
   type: 'DELETE_TAG',
    id
});

export const clickClear = () => ({
type: 'DELETE_ALL_TAGS',

});