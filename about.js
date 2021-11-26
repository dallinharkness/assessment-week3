console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted');
}




let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener('mouseover', () =>{
	alert('You are beautiful!')
})