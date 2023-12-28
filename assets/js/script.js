function jumpToSection(sectionId) {
  var targetSection = document.getElementById(sectionId);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth",
  });
}
