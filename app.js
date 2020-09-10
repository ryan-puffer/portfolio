const projects = document.querySelectorAll('.project-thumbnail');
const work = document.querySelector('.work');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');
let modalIndex;

const projectDetails = [
	{
		name    : 'Wheel of Success',
		img     : 'images/thumbnails/wheelofsuccess1thumbnail.png',
		tech    :
			'<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i>',
		site    : 'https://wheelofsuccessproject.netlify.app',
		code    : 'https://github.com/ryan-puffer/tdu6-wheel-of-success',
		details : 'Utilize DOM manipulation and blah blah blah'
	}
];

//function that executes when a card is clicked on
function displayModal(card) {
	//get innerHTML of selected card
	const modalHTML = `
    <h1>${projectDetails[0].name}</h1>
    <img class="modal-thumbnail" src="${projectDetails[0].img}" />
    <div class="technology">${projectDetails[0].tech}</div>
    <p class="modal-desc">${projectDetails[0].details}</p>
    <div class="buttons">
        <a href="${projectDetails[0].site}" class="card-button">Visit Site</a>
        <a href="${projectDetails[0].code}" class="card-button">View Code</a>
    </div>
    `;
	//set modalHTML to that card
	modalContent.innerHTML = modalHTML;
}

work.addEventListener('click', (e) => {
	const card = e.target;
	overlay.classList.remove('hidden');
	displayModal(card);
});

//close modal
modalClose.addEventListener('click', () => {
	overlay.classList.add('hidden');
});

overlay.addEventListener('click', (e) => {
	if (!overlay.classList.contains('hidden') && e.target !== modalContainer) {
		overlay.classList.add('hidden');
	}
});
