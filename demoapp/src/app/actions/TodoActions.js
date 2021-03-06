import dispatcher from "../dispatcher";

import { CREATE_TODO, REMOVE_ITEM,TOGGLE_TODO,RECEIVE_TODOS,RELOAD_TODOS, MARK_COMPLETE } 
     from "../constants";
            

export function createTodo(text) {
    dispatcher.dispatch({
        type: CREATE_TODO,
        text
    });
}

export function reloadTodos() {
    dispatcher.dispatch({ type: RELOAD_TODOS });
    setTimeout(() => {
        dispatcher.dispatch({
            type: RECEIVE_TODOS,
            todos: [{
                id: 113464613,
                text: "Lets Start",
                complete: false
            }, 

            {
                id: 235684679,
                text: "Flux Demo",
                complete: false
            },

            {
                id: 235684676,
                text: "Redux Demo",
                complete: false
            }, 

            {
                id: 235688679,
                text: "Redux Middleware's",
                complete: false
            }, 

            {
                id: 235684179,
                text: "React Flux Router",
                complete: false
            },

            {
                id: 235084169,
                text: "Redux - Thunk, Saga, Promise",
                complete: false
            },]
        });
    }, 1500);
}


export function toggleTodo(id) {
    dispatcher.dispatch({
        type: TOGGLE_TODO,
        id
    });
}

export function removeTodo(id) {
    dispatcher.dispatch({
        type: REMOVE_ITEM,
        id
    });
}


export function markAllCompleted() {
    dispatcher.dispatch({
        type: MARK_COMPLETE
    });
}