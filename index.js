// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
const hero = document.querySelector('.home-hero');

fetch('https://api.nasa.gov/planetary/apod?api_key=nuTfpJELDwGbmcNupmJ3aD9FoCm17voCiOO8488Q').then(function(response) {
  return response.json();
}).then(function(data) {
  if (data.media_type == 'image') {
    hero.style.backgroundImage = 'url(' + data.url + ')';
    console.log(data.url);
  } else {
    hero.style.backgroundImage = 'linear-gradient(to right, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)), url(../../assets/svg/common-bg.svg)';
  }
}).catch(function() {
  hero.style.backgroundImage = 'linear-gradient(to right, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)), url(../../assets/svg/common-bg.svg)';
  console.log("Booo");
});

hero.style.backgroundImage = 'url(./selfie.jpeg)';

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
