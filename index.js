const subscribeBtn = document.querySelector('.subscribe-btn');
const dismissBtn = document.querySelector('.dismiss-btn');
const displayEmail = document.querySelector('.display-email');
const successContainer = document.querySelector('.success-container');
const mainContainer = document.querySelector('.main-container');
const validError = document.querySelector('.valid');
const emailInput = document.getElementById('email');

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (emailInput.value !== '') {
        validateEmail();
    } else {
        validError.style.opacity = '1';
        emailInput.style.borderColor = 'rgb(183 13 1)'
        emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.3)'
    }
})

function validateEmail(params) {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailInput.value.match(pattern)) {
        validError.style.opacity = '1';
        emailInput.style.borderColor = 'rgb(183 13 1)';
        emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.3)';
    } else {
        validError.style.opacity = '0';
        emailInput.style.borderColor = 'hsl(231, 7%, 60%)';
        emailInput.style.backgroundColor = 'hsl(0, 0%, 100%)';
        mainContainer.style.display = 'none';
        successContainer.style.display = 'flex';
        displayEmail.textContent = emailInput.value;
    }
}

dismissBtn.addEventListener('click', () => {
    mainContainer.style.display = 'grid';
    document.getElementById('email').value = '';
    successContainer.style.display = 'none';
})

function updateImageSrc() {
    const img = document.getElementById('sign-up-image');
    const smallImageSrc = 'assets/images/illustration-sign-up-mobile.svg'; // Path to the smaller image
    const largeImageSrc = 'assets/images/illustration-sign-up-desktop.svg'; // Path to the larger image

    if (window.innerWidth < 850) {
        img.src = smallImageSrc;
    } else {
        img.src = largeImageSrc;
    }
}

// Initial check
updateImageSrc();

// Update image source on window resize
window.addEventListener('resize', updateImageSrc);
