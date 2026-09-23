/* =====================================================
   OPERATION TORCH
   INTERACTIVE SCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle("open");

        if (
            navigation.classList.contains("open")
        ) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

<<<<<<< HEAD
=======
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

                scoreElement.textContent = `Score: ${score} / ${questions.length}`;
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
>>>>>>> 4ac129e (Update Operation Torch resource archive)
    }
);


/* Close menu when a link is selected */

const navigationLinks =
    document.querySelectorAll(
        "#navigation a"
    );


navigationLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navigation.classList.remove(
                "open"
            );

            menuButton.textContent = "☰";

        }
    );

});



/* =====================================================
   DID YOU KNOW
===================================================== */

const facts = [

    {
        title:
            "The operation had three major landing areas.",

        text:
            "Allied forces landed around Casablanca, Oran and Algiers in French North Africa."
    },

    {
        title:
            "Operation Torch began on 8 November 1942.",

        text:
            "The invasion began with simultaneous amphibious landings across several locations in French North Africa."
    },

    {
        title:
            "The operation was mainly an Anglo-American effort.",

        text:
            "American and British forces worked together during one of the major Allied operations of 1942."
    },

    {
        title:
            "The Western Task Force targeted Casablanca.",

        text:
            "The Western Task Force was commanded by Major General George S. Patton and operated in the Casablanca area."
    },

    {
        title:
            "The operation created a complicated political situation.",

        text:
            "The Allies were attacking territory controlled by Vichy France, making the military situation politically sensitive."
    },

    {
        title:
            "Naval power was essential to the invasion.",

        text:
            "Ships transported troops and equipment while naval forces supported and protected the amphibious landings."
    },

    {
        title:
            "Operation Torch opened a new Allied front.",

        text:
            "The operation established an Allied presence in North Africa and supported subsequent operations in the region."
    },

    {
        title:
            "Torch was part of the wider North African campaign.",

        text:
            "The operation contributed to the wider Allied campaign that continued in North Africa after the initial landings."
    }

];


let currentFact = 0;


const factTitle =
    document.getElementById(
        "factTitle"
    );


const factText =
    document.getElementById(
        "factText"
    );


const factNumber =
    document.getElementById(
        "factNumber"
    );


const totalFacts =
    document.getElementById(
        "totalFacts"
    );


const nextFact =
    document.getElementById(
        "nextFact"
    );


const previousFact =
    document.getElementById(
        "previousFact"
    );


totalFacts.textContent =
    facts.length;



function displayFact(index) {

    factTitle.classList.remove(
        "fact-changing"
    );

    factText.classList.remove(
        "fact-changing"
    );


    void factTitle.offsetWidth;


    factTitle.textContent =
        facts[index].title;


    factText.textContent =
        facts[index].text;


    factNumber.textContent =
        index + 1;


    factTitle.classList.add(
        "fact-changing"
    );

    factText.classList.add(
        "fact-changing"
    );

}


nextFact.addEventListener(
    "click",
    () => {

        currentFact++;

        if (
            currentFact >= facts.length
        ) {

            currentFact = 0;

        }

        displayFact(currentFact);

    }
);


previousFact.addEventListener(
    "click",
    () => {

        currentFact--;

        if (currentFact < 0) {

            currentFact =
                facts.length - 1;

        }

        displayFact(currentFact);

    }
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();



/* =====================================================
   INITIAL FACT
===================================================== */

displayFact(0);
