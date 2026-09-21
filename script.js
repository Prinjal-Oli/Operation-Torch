/* =====================================================
   OPERATION TORCH
   INTERACTIVE JAVASCRIPT
===================================================== */


/* =====================================================
   DID YOU KNOW FACTS
===================================================== */

const facts = [

    {
        title: "The operation had three major landing areas.",
        text: "Allied forces landed around Casablanca, Oran and Algiers in French North Africa."
    },

    {
        title: "Operation Torch began on 8 November 1942.",
        text: "The invasion began with simultaneous amphibious landings across several locations in French North Africa."
    },

    {
        title: "The operation was mainly an Anglo-American effort.",
        text: "American and British forces worked together in one of the largest Allied operations conducted up to that point in the war."
    },

    {
        title: "The Western Task Force came from the United States.",
        text: "The Western Task Force was commanded by Major General George S. Patton and targeted the Casablanca area."
    },

    {
        title: "The invasion involved a difficult political situation.",
        text: "The Allies were attacking territory controlled by Vichy France, which created a complicated military and diplomatic situation."
    },

    {
        title: "Naval power was essential to the operation.",
        text: "Large naval forces transported troops, protected the landing forces and supported the amphibious assault."
    },

    {
        title: "The landings opened a new Allied front.",
        text: "Operation Torch established a major Allied presence in North Africa and allowed further operations against Axis forces in the region."
    },

    {
        title: "Operation Torch was part of a wider North African campaign.",
        text: "The operation helped create the conditions for continued Allied operations in North Africa and eventually the campaign in Tunisia."
    }

];


/* =====================================================
   FACT ELEMENTS
===================================================== */

const factTitle = document.getElementById("factTitle");
const factText = document.getElementById("factText");

const factNumber = document.getElementById("factNumber");
const totalFacts = document.getElementById("totalFacts");

const nextFactButton =
    document.getElementById("nextFact");

const previousFactButton =
    document.getElementById("previousFact");

let currentFact = 0;


/* Display total number of facts */

totalFacts.textContent = facts.length;


/* =====================================================
   SHOW FACT
===================================================== */

function showFact(index) {

    factTitle.classList.remove("fact-changing");
    factText.classList.remove("fact-changing");

    /*
        Force browser to restart animation.
    */

    void factTitle.offsetWidth;

    factTitle.textContent = facts[index].title;

    factText.textContent = facts[index].text;

    factNumber.textContent = index + 1;

    factTitle.classList.add("fact-changing");
    factText.classList.add("fact-changing");
}


/* =====================================================
   NEXT FACT
===================================================== */

function nextFact() {

    currentFact++;

    if (currentFact >= facts.length) {
        currentFact = 0;
    }

    showFact(currentFact);
}


/* =====================================================
   PREVIOUS FACT
===================================================== */

function previousFact() {

    currentFact--;

    if (currentFact < 0) {
        currentFact = facts.length - 1;
    }

    showFact(currentFact);
}


/* =====================================================
   BUTTON EVENTS
===================================================== */

nextFactButton.addEventListener(
    "click",
    nextFact
);

previousFactButton.addEventListener(
    "click",
    previousFact
);


/* =====================================================
   KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "ArrowRight") {
            nextFact();
        }

        if (event.key === "ArrowLeft") {
            previousFact();
        }

    }
);


/* =====================================================
   NAVIGATION
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section[id]");


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(
                item => item.classList.remove("active")
            );

            this.classList.add("active");

        }
    );

});


/* =====================================================
   ACTIVE NAVIGATION WHILE SCROLLING
===================================================== */

const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + id
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   THEME BUTTON
===================================================== */

const themeButton =
    document.getElementById("themeButton");


let alternateMode = false;


themeButton.addEventListener(
    "click",
    function () {

        alternateMode = !alternateMode;

        if (alternateMode) {

            document.documentElement.style.setProperty(
                "--gold",
                "#c99b4e"
            );

            document.documentElement.style.setProperty(
                "--gold-light",
                "#f4d49a"
            );

            themeButton.textContent = "◐";

        } else {

            document.documentElement.style.setProperty(
                "--gold",
                "#d7ad62"
            );

            document.documentElement.style.setProperty(
                "--gold-light",
                "#f0d39a"
            );

            themeButton.textContent = "☼";

        }

    }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   INITIAL FACT
===================================================== */

showFact(0);


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "Operation Torch Digital Historical Resource loaded."
);
