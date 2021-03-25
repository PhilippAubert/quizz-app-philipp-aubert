import { getSections } from './lib/db.js'
import { createCard } from './lib/cards.js'

const content = document.querySelector('.content')

const data = getSections()

for (let i = 0; i < data.length; i++) {
  const card = createCard(data[i])

  content.append(card)
}
