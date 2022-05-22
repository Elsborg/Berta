//Henter elementet med id'et og gemmer det i en variable.
const toggleButton =  document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

//Putter en event listener på toggleButton, så ved et click skal den
//tilføje klassen "active", så mobil menuen bliver synlig.
toggleButton.addEventListener('click', () => {
naviList.classList.toggle('active');
})