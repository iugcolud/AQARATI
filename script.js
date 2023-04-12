// This script will display an alert when the user clicks the "Request More Information" button
const button = document.querySelector('button');
button.addEventListener('click', function() {
	alert('Thank you for your interest. We will contact you shortly.');
});

const contactButton = document.querySelector('.contact');
const phoneNumber = document.querySelector('.phone-number').textContent;

contactButton.addEventListener('click', function() {
	window.location.href = 'tel:' + phoneNumber;
});

const commentForm = document.querySelector('.comment-form');
const commentList = document.querySelector('.comment-list');

commentForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const name = commentForm.elements.name.value;
	const comment = commentForm.elements.comment.value;
	const newComment = document.createElement('li');
	newComment.textContent = `${name}: ${comment}`;
	commentList.appendChild(newComment);
	commentForm.reset();
});
