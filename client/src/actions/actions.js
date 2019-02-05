export const setBottles = bottles => {
  return {
    type: 'SET_BOTTLES',
    bottles
  }
}

export const setDrinks = drinks => {
  return {
    type: 'SET_DRINKS',
    drinks
  }
}

export const setAll = data => {
  return {
    type: 'SET_ALL',
    drinks: data.drinks,
    bottles: data.bottles
  }
}

export const setLists = lists => {
  return {
    type: 'SET_LISTS',
    drinksList: lists.drinksList,
    bottlesList: lists.bottlesList
  }
}
