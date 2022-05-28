const targets = document.querySelectorAll('.about-img'); //Gemmer billede element i en variable
const targets2 = document.querySelectorAll('.front-image'); //Gemmer billede element i en variable


//Opretter en lazyload funktion
const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    //Her bliver der loopet over entries, og der bliver set om de intersecter med viewporten
    console.log(entries)
    entries.forEach(entry => {

      if (entry.isIntersecting) { //true eller false om den intetsecter
        const img = entry.target; //Billedet som intersecter
        const src = img.getAttribute('lazyload');

        img.setAttribute('src', src); //Sætter src attribut på billedet
        img.classList.add('fade'); //Tilføjer klassen fade til billedet

        observer.disconnect(); //Billedet er loadet og vi disconnecter observeren 
      }
    });
  });

  io.observe(target) //Kalder observe på target element
};

targets.forEach(lazyLoad); //Looper over alle elementer i DOM og tilføjer observeren til dem
targets2.forEach(lazyLoad); //Looper over alle elementer i DOM og tilføjer observeren til dem
