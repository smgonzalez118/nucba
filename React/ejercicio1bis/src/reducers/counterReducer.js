import React from 'react'

const counterReducer = (state, action) => {
 switch(action.type) {
    case 'increment':
        return {count: state.count + 1};
    case 'decrement':
        if (state.count >= 1) {
            return {count: state.count - 1}
        } else {
            return {count: state.count, error: true}
        }
 }
}

export default counterReducer