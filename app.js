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
		details :
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
	},
	{
		name    : 'YourApp Dashboard',
		img     : 'images/thumbnails/WebAppDashboardthumbnail.png',
		tech    :
			'<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i>',
		site    : 'https://yourappdashboard.netlify.app/',
		code    : 'https://github.com/ryan-puffer/tdu7-web-app-dashboard',
		details :
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
	},
	{
		name    : 'PacMan - Desktop Edition',
		img     : 'images/thumbnails/pacman1thumbnail.png',
		tech    : '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js"></i>',
		site    : 'https://pacman-js-game.netlify.app/',
		code    : 'https://github.com/ryan-puffer/pacman-js',
		details :
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
	},
	{
		name    : 'YelpCamp',
		img     : 'images/thumbnails/yelpcamp1thumbnail.png',
		tech    :
			'<i class="fab fa-html5"></i><i class="fab fa-css3-alt"><i class="fab fa-node-js"></i></i><i class="fab fa-js"></i>',
		site    : 'https://yelpcamp-puffer.herokuapp.com/',
		code    : 'https://github.com/ryan-puffer/yelp_camp/tree/master/YelpCampDeployed',
		details :
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
	}
];

window.onload = (e) => {
	displayProjects();
};

//displays projects from projectDetails
function displayProjects() {
	let projectHTML = '';
	projectDetails.forEach((project) => {
		const name = project.name;
		const img = project.img;
		const tech = project.tech;
		const site = project.site;
		const code = project.code;
		projectHTML += `
        <div class="project-thumbnail">
        <h3>${name}</h3>
        <img src="${img}" alt="${name}">
        <div class="icons-card">
            <p class="field-card">
                ${tech}
            </p>
            <div class="buttons">
                <a href="${site}" class="card-button">Visit Site</a>
                <a href="${code}" class="card-button">View Code</a>
            </div>

        </div>
    </div>
        `;
	});
	work.innerHTML = projectHTML;
}

//function that executes when a card is clicked on
function displayModal(index) {
	// //get innerHTML of selected card
	// const modalHTML = `
	// <h1>${name}</h1>
	// <img class="modal-thumbnail" src="${projectDetails[0].img}" />
	// <div class="technology">${projectDetails[0].tech}</div>
	// <p class="modal-desc">${projectDetails[0].details}</p>
	// <div class="buttons">
	//     <a href="${projectDetails[0].site}" class="card-button">Visit Site</a>
	//     <a href="${projectDetails[0].code}" class="card-button">View Code</a>
	// </div>
	// `;
	// //set modalHTML to that card
	// modalContent.innerHTML = modalHTML;
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
