import React, { createContext, useReducer } from 'react'
import { initialState, reducer, type StateContextType} from "../reducers/todos";

// create context
export const stateContext = createContext<StateContextType | undefined >(undefined);


// component to provide context's data

function StateContextProvider({children}: {children: React.ReactNode }) {
   const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <stateContext.Provider value={{ state, dispatch }}>
        {children}
    </stateContext.Provider>
  )
}

export default StateContextProvider
