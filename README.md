# Lesson-03-REI_useContext-useReducer

PREVIOUSLY

- React and TypeScript
- State Management with useReducer()

TODAY

- Combining `useReducer` and `useContext`

Combining `useReducer` and `useContext`

- Tiny review: What is React Context API?
    - It is often used as a storage for a lobal data
    - It allows us to make data available throughout the component tree
    - Context contains any kind of values
    - We Provide a value to the context
    - Any component can consume the value with `useContext`

- With `useReducer` we can manage complex state

    - We can use `useReducer` to manage the state of our context
    - We can use `useContext` to consume the state of our context

- Basically, our context will contail as its value:
    - The state itself!
    - The dispatch function

- Components can:
    - Access the state
    - Dispatch actions to update the state

- Let's combine `useReducer` and `useContext`