import { AsyncStorage } from 'react-native';
const DATA_STORAGE_KEY = 'flashcards: decks'

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}



export function getDecks (deck) {
 return AsyncStorage.getItem(DATA_STORAGE_KEY)
 .then(results => {
   if(results === null) {
     AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(decks))
     return decks
   }else {
     return JSON.parse(results)
   }
 })

}

export function saveDeckTitle(title){
  return AsyncStorage.mergeItem(DATA_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

export function saveCardToDeck (name, card) {
return AsyncStorage.getItem(DATA_STORAGE_KEY)
.then(results => JSON.parse(results))
.then(results => {
  results[name].questions.push(card)
  AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(results))
    return results
})
}

export function removeEntry (key) {
return AsyncStorage.getItem(DATA_STORAGE_KEY)
.then((results) => {
  const data = JSON.parse(results)
  data[key] = undefined
  delete data[key]
  AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data))
  })
}

