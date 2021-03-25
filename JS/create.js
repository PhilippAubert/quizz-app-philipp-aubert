import { pushSection } from './lib/db.js'

let form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()

  let question = form['textarea1']
  let answer = form['textarea2']

  const submit = {
    questionText: question.value,
    answerText: answer.value,
  }

  console.log(submit)

  pushSection(submit)

  form.reset()
  alert('Adding Question / Answer!')
})

function itemsStringToArray(itemsString) {
  const submit = itemsString.split(',')

  return submit
  console.log(submit)
}
