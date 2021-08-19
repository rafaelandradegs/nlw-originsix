// Abre e fecha o menu quando clicar no icone: Hamburguer e X

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toogle')

toggle.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
})

// Quando clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
})

// Mudar o header da pagina quando der scroll
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Testimonials

const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// ScrollReveal: Mostrar elementos quando der scroll na pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .image,
  footer .brand, footer .social
  `,
  { interval: 200 }
)

// BOTAO VOLTAR PARA O TOPO

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', backToTop, changeHeaderWhenScroll)
