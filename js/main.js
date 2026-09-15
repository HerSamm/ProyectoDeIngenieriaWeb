const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
	const isOpen = navigation.classList.toggle('is-open');
	menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
	navigation.classList.remove('is-open');
	menuButton.setAttribute('aria-expanded', 'false');
}));

let previousScroll = window.scrollY;
window.addEventListener('scroll', () => {
	const currentScroll = window.scrollY;
	const scrollingDown = currentScroll > previousScroll;
	const header = document.querySelector('.site-header');

	if (scrollingDown && currentScroll > 120) header.classList.add('is-hidden');
	if (!scrollingDown) header.classList.remove('is-hidden');
	previousScroll = currentScroll;
}, { passive: true });

document.querySelector('#contact-form').addEventListener('submit', event => {
	event.preventDefault();
	const status = event.currentTarget.querySelector('.form-status');
	status.textContent = 'Gracias por escribirnos. Te contactaremos a la brevedad.';
	event.currentTarget.reset();
});
