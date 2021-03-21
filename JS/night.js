// // NIGHT MODE

let nightButton = document.querySelector('.nightMode')

let nightMain = document.querySelector('.main-grid')
let nightBody = document.querySelector('.body')
let nightHeader = document.querySelector('.header-grid')
let nightProfile = document.querySelector('.photo-box')
let nightAbout = document.querySelector('.about')
let nightHeadline = document.querySelector('.headline')
let nightButtonLogout = document.querySelector('.button-logout')
let nightFooter = document.querySelector('.footer-grid')
let nightIcon = document.querySelector('.button')
let nightMode = document.querySelector('.nightMode')

nightButton.addEventListener('click', event => {
  nightMain.classList.toggle('main-grid-dark')
  nightBody.classList.toggle('body-dark')
  nightHeader.classList.toggle('header-grid-dark')
  nightProfile.classList.toggle('photo-box-night')
  nightAbout.classList.toggle('about-dark')
  nightHeadline.classList.toggle('headline-dark')
  nightButtonLogout.classList.toggle('button-logout-dark')
  nightFooter.classList.toggle('footer-grid-dark')
  nightIcon.classList.toggle('button-night')
  nightMode.classList.toggle('nightModeDark')
})

nightButton.addEventListener('click', event => {
  event.target.textContent =
    event.target.textContent == 'Night Mode' ? 'Night Mode OFF' : 'Night Mode'
})
