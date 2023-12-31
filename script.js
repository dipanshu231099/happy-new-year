const cards = document.querySelectorAll('.card');
let currentCard = 0;

function showCard(index) {
    cards.forEach((card, idx) => {
        if (idx === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function calculateTimeRemaining() {
    const currentTime = new Date();
    const newYearDate = new Date(currentTime.getFullYear() + 1, 0, 1); // January 1st of the next year
    const timeLeft = newYearDate - currentTime;
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.textContent = calculateTimeRemaining();
    }
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentCard++;
    if (currentCard >= cards.length) {
        currentCard = cards.length-1;
    }
    showCard(currentCard);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentCard--;
    if (currentCard < 0) {
        currentCard = 0;
    }
    showCard(currentCard);
});

// Show the initial card and start the countdown
showCard(currentCard);
if (currentCard === 0) {
    setInterval(updateCountdown, 1000); // Update countdown every second
}

function unlockContent() {
    const cardThree = document.getElementById('card3');
    if (cardThree) {
        cardThree.innerHTML = `
            <h2>Happy New Year!</h2>
            <p>Awaiting to meet you in person sometime.</p>
            <img src="burgers.jpg" alt="Burgers" width="300">
        `;
    }
}

function checkNewYear() {
    const currentTime = new Date();
    const newYearDate = new Date(currentTime.getFullYear() + 1, 0, 1); // January 1st of the next year
    const timeLeft = newYearDate - currentTime;
    // console.log(Math.abs(timeLeft / (1000 * 60 * 60)));

    if (timeLeft <= 0) {
        unlockContent();
    }
}

setInterval(checkNewYear, 1000);
