import { data } from './lib/db.js'
import { createCard } from './lib/cards.js'

const content = document.querySelector('.content')

for (let i = 0; i < data.length; i++) {
  const card = createCard(data[i])

  content.append(card)
}

// console.log(data)
createCard(createCard)
console.log(createCard)
console.log(data)
