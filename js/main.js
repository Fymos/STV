var elForm = document.querySelector(".form")
var elFile = document.querySelector(".form__file").value
var elName = document.querySelector(".form__name")
var elPrice = document.querySelector(".form__price")
var cardImg = document.querySelector(".card__img")
var cardTitle = document.querySelector(".card__title")
var cardText = document.querySelector(".card__text")

elForm.addEventListener('submit', function(evnt) {
  evnt.preventDefault()
  cardTitle.textContent = elName.value
  cardText.textContent = elPrice.value + "$"
})