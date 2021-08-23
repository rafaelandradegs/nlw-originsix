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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
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
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu ativo conforme secao visivil na pagina

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// When scroll
window.addEventListener('scroll', () => {
  backToTop()
  changeHeaderWhenScroll()
  activateMenuAtCurrentSection()
})
