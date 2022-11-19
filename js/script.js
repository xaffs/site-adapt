var hamburger = document.getElementById('bg')
var menu = document.getElementById('burger-menu')

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('active');
};

hamburger.addEventListener('click', function(e) {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', function (e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_hamburger = target == hamburger;
  var menu_is_active = menu.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});