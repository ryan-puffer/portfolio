const projects = document.querySelectorAll('.project-thumbnail');
const work = document.querySelector('.work');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('modal-close');
let modalHTML;

//function that executes when a card is clicked on
function displayModal(index) {
	//get innerHTML of selected card
	//set modalHTML to that card
}

work.addEventListener('click', (e) => {
	const card = e.target;
	overlay.classList.remove('hidden');
});
