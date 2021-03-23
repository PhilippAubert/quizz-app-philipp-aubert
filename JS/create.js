import { pushSection } from './lib/db.js'

let forms = document.querySelectorAll('form')

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', event => {
    event.preventDefault()

    let input1 = forms[i]['textarea1']
    let input2 = forms[i]['textarea2']

    let submit = `Question: ${input1.value} // Answer: ${input2.value}`

    console.log(submit)

    forms[i].reset()
    // console.log(inputForAnswer.value)
  })

  function itemsStringToArray(itemsString) {
    const submit = itemsString.split(',')

    return submit
  }
}
