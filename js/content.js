var slideIndex = 1

function changeSlide(n) {
	showPhoneContent(slideIndex = n)
  var items = document.getElementsByClassName('phone__item')
    
  for(var i = 0; i < items.length; i++) {
    if (i == n - 1) {
      items[i].classList.add('active')
    } else {
      items[i].classList.remove('active')
    } 
  } 
}

function showPhoneContent(n) {
	var i;
	var slides = document.getElementsByClassName("screen__wrapper")

	if (n > slides.length) { 
    slideIndex = 1 
  }
	if (n < 1) { 
    slideIndex = slides.length 
  }

	for (i = 0; i < slides.length; i++) {   
    slides[i].style.display = "none"
	}
	slides[slideIndex - 1].style.display = "block"
}

function generateTiles() {
	var i;
	var x = document.getElementsByClassName("screen__wrapper")
	for (i = 0; i < x.length; i++) {
		var tileNumber = i + 1
		var tile = document.createElement('span')
    
    if (tileNumber == 1) {
      tile.innerHTML =	
      '<div class="phone__item active" onclick="changeSlide(' + tileNumber + ')"><img src="./assets/img/excavator.jpg" class="evcavator" /><p class="item__label">Constructions</p></div>'
		  document.getElementById('phone-menu').appendChild(tile)
    } else {
      tile.innerHTML =	
      '<div class="phone__item" onclick="changeSlide(' + tileNumber + ')"><img src="./assets/img/excavator.jpg" class="evcavator" /><p class="item__label">Constructions</p></div>'
      document.getElementById('phone-menu').appendChild(tile)
    }
	}
}
showPhoneContent(slideIndex);
generateTiles()