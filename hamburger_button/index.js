var hamButtons = document.getElementsByClassName('ham-btn');

var hamIcon = '<div class="ham-icon"></div><div class="ham-icon"></div><div class="ham-icon"></div>';
for (var i = 0; i < hamButtons.length; ++i) {
  hamButtons[i].style.position = 'relative';
  hamButtons[i].innerHTML = hamIcon;
  
  // make it a square
  hamButtons[i].style.height = 
    hamButtons[i].style.width =
    min(hamButtons[i].offsetWidth, hamButtons[i].offsetHeight).toString() + 'px';


  hamButtons[i].addEventListener('click', function (eveah) {
    eveah.target.classList.toggle('collapsed');
  });
}
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}