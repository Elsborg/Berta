//Koden bliver eksekveret når siden er loadet helt, når siden er loadet kører funktionen setup
window.addEventListener('DOMContentLoaded', setup); 

//Der bliver lavet en variable options, som har en rootMargin, den gør at der først bliver intersectet ved -200px af viewporten.
function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    //Her bliver intersectionObserveren oprettet, den har to argumenter, hvor ebtries er de elementer der bliver observeret
    //Og oberserveren selv
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => { //Her bliver der brugt en forEach til at specificere hver enkel aktion
            if(entry.isIntersecting) { //Hvis der bliver intersectet, skal klassen .show tilføjes
                entry.target.classList.add('show');
                observer.unobserve(entry.target); //Når klassen er blevet tilføjet ønsker man ikke længere at observe
            } else { //Hvis elementerne ikke blive observet skal der ikke ske noget
                return;
            }
        })
        //Callback funktion
    }, options);

    //Her bliver der lavet en variable para, som henter p tagget med klassen .aboutText
    const para = document.querySelectorAll('.aboutText');
    para.forEach(aboutText => observer.observe(aboutText)); //Her bliver observeren sat til at observe på alle p tagsne 

    const p = document.querySelectorAll('.konceptText');
    p.forEach(konceptText => observer.observe(konceptText));

    const pskrift = document.querySelectorAll('.indexText');
    pskrift.forEach(indexText => observer.observe(indexText));
}


