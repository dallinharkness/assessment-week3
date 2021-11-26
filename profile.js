let favColor = document.querySelector('#color');
let favPlace = document.querySelector('#place')
let favRitual = document.querySelector('#ritual')


function favortieColorBtn(evt) {
	evt.preventDefault();
	
	alert('My favorite color is blue!');
}

favColor.addEventListener('click',favortieColorBtn)

function favortiePlaceBtn(evt) {
	evt.preventDefault();
	
	alert('My favorite place is Scottland!');
}

favPlace.addEventListener('click',favortiePlaceBtn)

function favoriteRitualBtn(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual is taking a shower everyday!');
}

favRitual.addEventListener('click',favoriteRitualBtn)