(function() {
  var menu = document.querySelector('ul'),
    menulink = document.querySelector('#navigation');

  menulink.addEventListener('click', function(e) {
    menu.classList.toggle('active');
    e.preventDefault();
  });
})();
