var elForm = document.querySelector(".form")
var cardImg = document.querySelector(".card__img")
var cardTitle = document.querySelector(".card__title")
var cardText = document.querySelector(".card__text")

elForm.addEventListener('submit', function(evnt) {
  evnt.preventDefault()
  cardImg.src = URL.createObjectURL(evnt.target.img.files[0])
  cardTitle.textContent = evnt.target.name.value
  cardText.textContent = evnt.target.price.value + "$"
})