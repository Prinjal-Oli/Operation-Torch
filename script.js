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
