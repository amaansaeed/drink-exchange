const initState = {
  drinks: [],
  bottles: [],
  drinksList: [],
  bottlesList: []
}

export default function reducers(state = initState, action) {
  switch (action.type) {
    case 'SET_ALL':
      return {
        ...state,
        drinks: action.drinks,
        bottles: action.bottles
      }
    case 'SET_DRINKS':
      return {
        ...state,
        drinks: action.drinks
      }
    case 'SET_BOTTLES':
      return {
        ...state,
        bottles: action.bottles
      }
    case 'SET_LISTS':
      return {
        ...state,
        drinksList: action.drinksList,
        bottlesList: action.bottlesList
      }
    default:
      return state
  }
}
