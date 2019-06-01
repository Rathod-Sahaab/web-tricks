// java script opjects (Associative data)
var credits = {
  'fire':
      'Image by <a href="https://pixabay.com/users/Comfreak-51581/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1363095">Jonny Lindner</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1363095">Pixabay</a>',
  'water':
      'Image by <a href="https://pixabay.com/users/StockSnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=698521">StockSnap</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=698521">Pixabay</a>',
  'earth':
      'Image by <a href="https://pixabay.com/users/PatternPictures-622877/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1128815">PatternPictures</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1128815">Pixabay</a>',
  'lightning':
      'Image by <a href="https://pixabay.com/users/PatternPictures-622877/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1128815">PatternPictures</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1128815">Pixabay</a>',
  'wind':
      'Image by <a href="https://pixabay.com/users/jplenio-7645255/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3417042">Johannes Plenio</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3417042">Pixabay</a>'
}

var currently_active;

var credit = document.getElementById('credit');
var body = document.getElementsByTagName('body')[0];
var natures = document.getElementsByTagName('li');

// To collapse on smaller screens
var menuButton = document.getElementById('menu-btn');
var ul = document.getElementsByTagName('ul')[0];

// To collapse on smaller screens
menuButton.addEventListener('click', function(e) {
  ul.classList.toggle('collapsed');
})

// To assign default
currently_active = natures[0];
refresh();
for (var i = 0; i < natures.length; ++i) {
  natures[i].addEventListener('click', function(e) {
    currently_active.classList.remove('active');

    // e.target gives the element which calls event listener
    currently_active = e.target;
    refresh();

    // To collapse on smaller screens
    ul.classList.add('collapsed');
  });
}

function refresh() {
  currently_active.classList.add('active');

  body.style.backgroundImage = 'url(\'' + currently_active.dataset.src + '\')';
  // See data attributes in HTML
  credit.innerHTML = credits[currently_active.dataset.credit];
}
