/////////////////////////// HTML STRUCTURE /////////////////////////////////

//   <section id="question-card0">
//   <div class="question-card__total">
//     <h2>QUESTION X</h2>

//     <p>Can you die without perishing ?</p>

//     <button class="question-card__answer">Show Answer</button>

//     <i class="fas fa-bookmark question-card__bookmark-non"></i>
//     <p class="answer">
//       When your body leaves your soul, your soul will be forever
//     </p>
//   </div>
// </section>

///////////////////////////////  JS ///////////////////////////////

export function createCard(card) {
  const cardSection = document.createElement('section')

  const headlineFrame = document.createElement('div')
  cardSection.append(headlineFrame)
  headlineFrame.classList.add('question-card__total-headline-frame')

  const headLine = document.createElement('h2')

  headLine.textContent = 'QUESTION'
  headlineFrame.append(headLine)
  headLine.classList.add('question-card__total-headline')

  const cardLayout = document.createElement('div')
  cardSection.append(cardLayout)
  cardLayout.classList.add('question-card__total')

  const questionH2 = document.createElement('h2')
  questionH2.textContent = card.question
  cardLayout.append(questionH2)
  questionH2.classList.add('question-card__total-h2')

  const questionButton = document.createElement('button')
  questionButton.textContent = 'Show Answer'
  questionButton.classList.add('question-card__total')
  cardLayout.append(questionButton)

  const answerText = document.createElement('p')
  answerText.textContent = card.answer
  cardLayout.append(answerText)
  answerText.classList.add('answer')

  const questionBookmark = document.createElement('i')
  questionBookmark.classList.add(
    'question-card__bookmark-non',
    'fas',
    'fa-bookmark',
    'icon'
  )
  cardLayout.append(questionBookmark)

  const bookmarks = document.querySelectorAll('i')
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
        event.target.textContent == 'Hide Answer'
          ? 'Show Answer'
          : 'Hide Answer'
    })
  }

  return cardSection
}
