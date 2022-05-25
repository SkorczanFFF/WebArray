var windowHeight = window.innerHeight 
var scrollOffset = window.pageYOffset
var navbarContainer = document.getElementById("navbar__container")
var navbar = document.getElementById("navbar")
var sales = document.getElementById("sales")

window.onscroll = () => {
  var currentScrollOffset = window.pageYOffset

  if (scrollOffset > windowHeight) {
    navbarContainer.style.background = "#007ad87e"
    navbar.style.padding = "1rem 8rem"
    sales.style.padding = ".25rem"
  } else {
    navbarContainer.style.background = "rgba(255, 255, 255, 0.15)"
    navbar.style.padding = "2rem 8rem"
    sales.style.padding = ".75rem"
  }

  if (scrollOffset < currentScrollOffset && scrollOffset > 200) {
    navbarContainer.style.top = "-170px"
  } else {
    navbarContainer.style.top = "0"
  }
  scrollOffset = currentScrollOffset
}