const accordionBtns = document.querySelectorAll(".acc__header")

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.display = "block";
      }
    }
  }
)
