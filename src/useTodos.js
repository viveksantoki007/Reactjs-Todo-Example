import { useEffect, useReducer } from 'react'

const initialState = {
  list: [
    {
      id: 1,
      listName: 'Read File',
      todos: [{ name: 'read all', status: 'Completed' }, { name: 'read important', status: 'Active' }]
    },
    {
      id: 2,
      listName: 'Fantasy Football',
      todos: [{ name: 'Play Football', status: 'Completed' }, { name: 'Watch Football', status: 'Active' }]
    },
    {
      id: 3,
      listName: 'Fantasy Cricket',
      todos: [{ name: 'Play Cricket', status: 'Completed' }]
    }
  ]
}

function syncStorage(state) {
  if (window && window.localStorage) {
    window.localStorage.setItem('appState', JSON.stringify(state))
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'read_storage':
      if (window && window.localStorage) {
        const state = window.localStorage.getItem('appState')
        if (state && state !== 'undefined') {
          return JSON.parse(state)
        }
      }

      return initialState

    case 'add_todo':
      const { newTodos } = action;

      return {
        list: state.list.map(item => {
          if (item.id === newTodos.id) {
            return {
              ...item,
              todos: [...newTodos.todos]
            }
          }

          return item
        })
      }

    case 'toggle_complete':
      const { id } = action

      return {
        list: state.list.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            }
          }

          return item
        })
      }
    case 'create_todo':
      const { text } = action
      const item = {
        id: Math.floor(Math.random() * 1000),
        listName: text,
        todos: []
      }

      const list = state.list.concat(item)
      return { list }

    default:
      throw new Error('Unknown type: ' + action.type);
  }
}

function useTodos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { list } = state

  useEffect(() => {
    dispatch({ type: 'read_storage' })
  }, [dispatch])

  useEffect(() => {
    syncStorage({ list })
  }, [list])

  const createTask = (text) => dispatch({ type: 'create_todo', text })
  const addTodos = (id, todos) => dispatch({ type: 'add_todo', newTodos: { id: id, todos: todos } });
  // const createTodo = (text) => dispatch({ type: 'create_todo', text })
  // const toggleComplete = (id) => dispatch({ type: 'toggle_complete', id })

  return { list, createTask, addTodos }
}

export default useTodos