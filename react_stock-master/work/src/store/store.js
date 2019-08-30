import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"


let reducerFn = (state = [], action) => {
    switch (action.type) {
        case "ADD_OBJ":
            state = action.data;
            return [...state];
        default:
            return [...state];
    }
}

let reducerList = (state = [], action) => {
    switch (action.type) {
        case "ADD_LIST":
            state.push(action.item)
            return [...state];
        case "REMOVE_DATA":
            let index = state.findIndex(el => el.id === action.delist.id);
            state.splice(index, 1)
            return [...state]
        default:
            return [...state];
    }
}

let reducerNum = (state = [], action) => {
    switch (action.type) {
        case "ADD_NUM":
            state.push(action.num);
            return state;

        default:
            return state
    }
}

let reducerdeList = (state = [], action) => {
    switch (action.type) {
        case "DEL_LIST":
            state.push(action.delist)
            return state;

        default:
            return state;
    }
}

let reducers = combineReducers({
    reducerFn,
    reducerList,
    reducerNum,
    reducerdeList
})


let store = createStore(reducers, applyMiddleware(thunk))
export default store;