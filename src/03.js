const { combineReducers, createStore } = require('redux')

const puppies = [
  { id: 1, name: 'Ham' },
  { id: 2, name: 'Abby' },
  { id: 3, name: 'Odie' }
]

const kittens = [
  { id: 1, name: 'Meowser' },
  { id: 2, name: 'Delphi' },
  { id: 3, name: 'Kalinda' }
]

/*
  Create a reducer function that manages CRUD actions for
  the above two datasets. You should be able to create,
  find, update, and remove each resource.

  Then, test your work by dispatching actions for each
  method.
*/
const ADD_PUPPIE = 'ADD_PUPPIE'
const REMOVE_PUPPIE = 'REMOVE_PUPPIE'
const UPDATE_PUPPIE = 'UPDATE_PUPPIE'

function puppies (state=puppies, action) {
  
  switch(action.type) {
    case ADD_PUPPIE:
      return [ ...state, action.payload ] 

    case REMOVE_PUPPIE:
      return state.filter(dog => dog.id !== payload.id)
    
    case UPDATE_PUPPIE:  
      const newState = [...state]
      const findDog = newState.findIndex(pup => pup.id === payload.id)
      return [...state.slice(0, findDog), payload, ...state.slice(findDog)]
   
    default:
      return state
  }

  const ADD_KITTEN = 'ADD_KITTEN'
  const REMOVE_KITTEN = 'REMOVE_KITTEN'
 
  function kittens(state=kittens, action) {
   
    switch(action.type) {
      case ADD_KITTENS:
        return [ ...state, action.payload]   

      case REMOVE_KITTENS:  

    }
  }

  const reducers = combineReducers(puppies)
  const store = createStore(reducers)
}