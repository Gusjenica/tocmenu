function toggleFolder(element) {
    const sublist = element.querySelector("ul");
    if (sublist) {
      sublist.classList.toggle("hidden");
    }
  }