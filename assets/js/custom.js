let elem = document.querySelector('.grid');
let iso = new Isotope( elem, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});

    
function filterPortfolio(filterName) {
    iso.arrange({
    filter: filterName
    });
}


let navbarTogglerNine = document.querySelector(
    ".navbar-nine .navbar-toggler"
  );
  navbarTogglerNine.addEventListener("click", function () {
    navbarTogglerNine.classList.toggle("active");
  });

  AOS.init({
    once:true,
    easing:'ease'
  });
 