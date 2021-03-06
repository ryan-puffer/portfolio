const work = document.querySelector('.work');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

const projectDetails = [
	{
		name: 'Wheel of Anchorman',
		img: 'images/anchorman.png',
		tech:
			'<i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-sass"></i> <i class="fab fa-js"></i>',
		site: 'https://wheelofsuccessproject.netlify.app',
		code: 'https://github.com/ryan-puffer/tdu6-wheel-of-success',
		details:
			'The Wheel of Anchorman was a fun opportunity to practice using JavaScript to generate a random phrase from an array and insert it into my HTML. I used a click listener with a checkLetter() function to see if the letter clicked was in the generated phrase. I had some fun with it by making it an Anchorman quote guessing game. ',
	},
	{
		name: 'YourApp Dashboard',
		img: 'images/webappdashboard2.png',
		tech:
			'<i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-sass"></i> <i class="fab fa-js"></i>',
		site: 'https://yourappdashboard.netlify.app/',
		code: 'https://github.com/ryan-puffer/tdu7-web-app-dashboard',
		details:
			'This was surpisingly one of the more difficult projects I built so far. Getting the layout to look proper in a mobile and desktop view was trickier than I originally thought it would be. I used CSS Grid to layout the dashboard. (I love Grid!) Then I used Flexbox to layout each individual widget. Incorporating ChartJS for the interactive charts was a lot of fun and made me excited to find other uses for it in the future.',
	},
	{
		name: 'iPhone Calculator Clone',
		img: 'images/react-calculator.png',
		tech:
			'<i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-js"></i> <i class="fab fa-react"></i>',
		site: 'https://react-calculator-sigma.vercel.app ',
		code: 'https://github.com/ryan-puffer/react-calculator',
		details:
			"I've been wanting to build a calculator since I learned JavaScript, and I thought that this was a great opportunity to flex my skills in React. After building this app using the Context API to manage state and pass click handlers, I decided to change the styling to simulate an iPhone. It took a lot of trial and error to get the feel right, but I'm happy with how this turned out!",
	},
	{
		name: 'YelpCamp',
		img: 'images/yelpcamp2.png',
		tech:
			'<i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-node-js"></i> <i class="fab fa-js"></i>',
		site: 'https://yelpcamp-puffer.herokuapp.com/',
		code: 'https://github.com/ryan-puffer/yelp_camp/tree/master/YelpCampDeployed',
		details:
			'The goal of YelpCamp was to create a full stack application with user authentication that allowed people to post, review, and comment on campsites. I built upon the original design by Colt Steele to add location functionality with the Google Maps API. Bootstrap was used for the layout and some base styles.  ',
	},
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
                <a href="${site}" class="card-button" target="_blank">Visit Site</a>
                <a href="${code}" class="card-button" target="_blank">View Code</a>
            </div>

        </div>
    </div>
        `;
	});
	work.innerHTML = projectHTML;
	//loop through each card and apply listener to each card
	const cards = document.querySelectorAll('.project-thumbnail');
	cards.forEach((card, index) => {
		card.addEventListener('click', (e) => {
			if (!e.target.classList.contains('card-button')) {
				overlay.classList.remove('hidden');
				displayModal(index);
			}
		});
	});
}

//function that executes when a card is clicked on
function displayModal(index) {
	//get innerHTML of selected card
	const modalHTML = `
        <h1 class="modal-title">${projectDetails[index].name}</h1>
        <img class="modal-thumbnail" src="${projectDetails[index].img}" />
        <div class="technology">${projectDetails[index].tech}</div>
        <p class="modal-desc">${projectDetails[index].details}</p>
        <div class="modal-buttons">
            <a href="${projectDetails[index].site}" class="card-button" target="_blank">Visit Site</a>
            <a href="${projectDetails[index].code}" class="card-button" target="_blank">View Code</a>
        </div>
        `;
	//set modalHTML to that card
	modalContent.innerHTML = modalHTML;
}

//close modal
modalClose.addEventListener('click', () => {
	overlay.classList.add('hidden');
});

overlay.addEventListener('click', (e) => {
	if (!overlay.classList.contains('hidden') && e.target !== modalContainer) {
		overlay.classList.add('hidden');
	}
});
