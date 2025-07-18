
/* ---------------- Types ------------------ */

export type TodoType = {
    id: number;
    title: string;
    status: "ONGOING" | "CANCELLED" | "COMPLETED";
    deadline: string;
}

export type StateType = {
    todos: TodoType[]
}

export type ActionType = {
    type: 'ADD_TODO' | 'REMOVE_TODO' | 'REMOVE_TODO';
    payload?: any;
}


export type StateContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};


/* ---------------- state ------------------ */

export const initialState: StateType = {
    todos: []
}

/* ---------------- reducer ------------------ */
export function reducer(state: StateType, action: ActionType): StateType {
    const newState = structuredClone(state);
    
    switch(action.type) {
        case 'ADD_TODO':
            newState.todos.push(action.payload)
            return newState;

        case 'REMOVE_TODO':
        case 'COMPLETE_TODO':

        default:
            console.log('Unknown Action dispatched')
            return state;
    }
}