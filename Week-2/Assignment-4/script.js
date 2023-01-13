// When the user clicks on the "Welcome Message" block, change the text to "Have a Good Time!".
const headerMessage = document.getElementById('message');
headerMessage.addEventListener('click', () => {
    headerMessage.innerHTML = '<p>Have a Good Time!</p>';
});

// When the user clicks the Call-to-Action button, show those hidden content boxes.
const moreBoxes = document.querySelector('.more-box');
const callToAction = document.querySelector('#call-to-action');
moreBoxes.style.display = 'none';
callToAction.addEventListener('click', () => {
    moreBoxes.style.display = 'flex';
});


