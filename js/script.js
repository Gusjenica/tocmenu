const folders = document.querySelectorAll(".folder");

  folders.forEach(folder => {
    folder.addEventListener("click", function(e) {
      e.stopPropagation();
      let nested = this.querySelector(".nested");
      if (nested) {
        nested.classList.toggle("active");
      }
    });
  });