// ========================================
// OPERATION TORCH WEBSITE
// INTERACTIVE JAVASCRIPT
// ========================================


// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {

            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });

});


// Reveal one historical fact at a time
const factPlayer = document.querySelector('[data-fact-player]');

if (factPlayer) {
    const factEntries = [...document.querySelectorAll('[data-fact]')];
    const factButton = factPlayer.querySelector('[data-fact-button]');
    const factContent = factPlayer.querySelector('[data-fact-content]');
    const factStatus = factPlayer.querySelector('[data-fact-status]');
    const factCount = factPlayer.querySelector('[data-fact-count]');
    const factProgress = factPlayer.querySelector('[data-fact-progress]');
    let currentFact = -1;

    if (factButton && factContent && factStatus && factCount && factProgress && factEntries.length) {
        factButton.addEventListener('click', () => {
        currentFact = (currentFact + 1) % factEntries.length;
        const entry = factEntries[currentFact];

        factContent.classList.remove('fact-player__content--visible');
        factContent.innerHTML = `<span class="fact-player__prompt">${entry.dataset.fact}</span>${entry.innerHTML}`;
        requestAnimationFrame(() => factContent.classList.add('fact-player__content--visible'));

        factStatus.textContent = currentFact === factEntries.length - 1 ? 'Final fact' : 'Fact unlocked';
        factCount.textContent = `${String(currentFact + 1).padStart(2, '0')} / ${factEntries.length}`;
        factButton.textContent = currentFact === factEntries.length - 1 ? 'Start again' : 'Next fact';
        factProgress.style.width = `${((currentFact + 1) / factEntries.length) * 100}%`;
        });
    }
}


// Score the Operation Torch knowledge quiz
const quiz = document.querySelector('.quiz-section');

if (quiz) {
    const questions = [...quiz.querySelectorAll('.quiz-question')];
    const scoreElement = quiz.querySelector('[data-quiz-score]');
    let score = 0;

    questions.forEach(question => {
        const correctOption = question.dataset.answer;
        const options = [...question.querySelectorAll('[data-option]')];

        options.forEach(option => {
            option.addEventListener('click', () => {
                if (question.classList.contains('quiz-question--answered')) {
                    return;
                }

                const isCorrect = option.dataset.option === correctOption;
                question.classList.add('quiz-question--answered');
                option.classList.add(isCorrect ? 'quiz-option--correct' : 'quiz-option--incorrect');

                const feedback = document.createElement('p');
                feedback.className = `quiz-feedback ${isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--incorrect'}`;
                feedback.textContent = isCorrect
                    ? 'Nice one! You know your Operation Torch history.'
                    : 'Good try! The correct answer is highlighted in green. Keep exploring.';
                question.appendChild(feedback);

                if (isCorrect) {
                    score += 1;
                } else {
                    question.querySelector(`[data-option="${correctOption}"]`).classList.add('quiz-option--correct');
                }

                if (scoreElement) {
                    scoreElement.textContent = `Score: ${score} / ${questions.length}`;
                }
            });
        });
    });
}


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    section.style.opacity = '0';
    section.style.transform = 'translateY(25px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    observer.observe(section);

});


// ========================================
// ACTIVE NAVIGATION
// ========================================

const navLinks = document.querySelectorAll('nav a');

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                const activeLink = document.querySelector(
                    `nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add('active');
                }

            }

        });

    },
    {
        threshold: 0.4
    }
);


sections.forEach(section => {
    sectionObserver.observe(section);
});


// ========================================
// FOOTER YEAR
// ========================================

const yearElement = document.querySelector('footer');

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML +=
        `<p>© ${currentYear} Operation Torch Resource Project</p>`;

}


// ========================================
// PAGE LOADED MESSAGE
// ========================================

window.addEventListener('load', () => {

    console.log(
        'Operation Torch resource website loaded successfully.'
    );

});
