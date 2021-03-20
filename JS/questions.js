const bookmarks = document.querySelectorAll('.question-card__bookmark-non')
const answers = document.querySelectorAll('.answer')
const buttons = document.querySelectorAll('button')

for (let i = 0; i < bookmarks.length; i++) {
  bookmarks[i].addEventListener('click', event => {
    bookmarks[i].classList.toggle('question-card__bookmark')
  })
}

for (let i = 0; i < answers.length; i++) {
  buttons[i].addEventListener('click', event => {
    answers[i].classList.toggle('answer-shown')
    event.target.textContent =
      event.target.textContent == 'Hide Answer' ? 'Show Answer' : 'Hide Answer'
  })
}
