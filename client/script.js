// Loader Website

const loader = document.querySelector('.loader')
window.addEventListener('load', () => {
  loader.classList.add('loaderOn')
  if(loader.className === 'loader loaderOn') {
    loader.style.display = "none"
  }
})

// Animation Text Loader


// Menu becomes fixed on scroll
const header = document.querySelector('.header-container')
const navigation = document.querySelector('.navigation-container');
const itemNavigation = document.querySelectorAll('.items-list-navigation')
const iconNavigation = document.querySelector('.icon')
const ratioNavFixed = 1;

const optionsNavFixed = {
  root: null,
  rootMargin: '0px',
  threshold: ratioNavFixed
}

const navFixed = function (entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio < ratioNavFixed) {
      navigation.classList.add('navigation-container-active');
      for (let i = 0; i < itemNavigation.length; i++) {
        itemNavigation[i].classList.add('item-list-navigation-active')
      }
      iconNavigation.classList.add('icon-navigation-active')
    } else {
      navigation.classList.remove('navigation-container-active');
      for (let i = 0; i < itemNavigation.length; i++) {
        itemNavigation[i].classList.remove('item-list-navigation-active')
      }
      iconNavigation.classList.remove('icon-navigation-active')
    }
  })
}

const observerNavFixed = new IntersectionObserver(navFixed, optionsNavFixed)
observerNavFixed.observe(header)



// Diaporama Réalisation

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10
});

// Diaporama Avis

new Swiper(".mySwiperTwo", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Open / Close Menu Mobile && Tablet

const listNav = document.querySelector(".list-navigation")
const burger = document.querySelector('.box-burger-nav')
const itemNav = document.querySelectorAll('.items-list-navigation')


burger.addEventListener('click', () => {
  listNav.classList.toggle('list-navigation-active')
  itemNav.forEach(item => {
    item.style.opacity = 0
    setTimeout(() => {
      item.style.opacity = 1
    }, 200)
  })
})
