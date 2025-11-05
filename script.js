// Når hele dokumentet (DOM) er klar, starter JavaScript-koden
document.addEventListener('DOMContentLoaded', function() {
    var box = document.getElementById('bellis-box');

    // Finder popup-boksen og overlayet og gemmer dem i variabler
    var box = document.getElementById('bellis-box');       // Selve popup-boksen
    var overlay = document.getElementById('popup-overlay'); // Det mørke overlay bag popup’en


    // Sørger for, at boksen starter skjult
    box.classList.add('slide-top');

    // Vent 2 sekunder før den glider ned
    setTimeout(function() {
        box.classList.remove('slide-top');
        box.classList.add('slide-down');
      overlay.classList.add('active'); // Gør overlayet synligt
    }, 2000);

    // Luk boksen
    var closeBtn = document.getElementById('bellis-close');
    closeBtn.addEventListener('click', function() {
        box.classList.remove('slide-down');
        box.classList.add('slide-top');
      overlay.classList.remove('active');
    });

    // Knapfunktion – sender brugeren videre til dit link
    var ctaBtn = document.getElementById('bellis-button');
    ctaBtn.addEventListener('click', function() {
        window.location.href = '⁦https://storyscaping.shstudio.dk/elementor-615/home/';
    });

  overlay.addEventListener('click', function() {
        box.classList.remove('slide-down');
        box.classList.add('slide-top');
        overlay.classList.remove('active');
        });
});
