//menu button
document.getElementById("menubtn").onclick = () => {
  document.getElementById("menu").classList.toggle("open");
};
//menu button end


//card
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.onclick = e => {
    if (!matchMedia("(hover: hover)").matches) {
      e.preventDefault();
      const wasActive = card.classList.contains("active");
      cards.forEach(c => c.classList.remove("active"));
      if (!wasActive) card.classList.add("active");
    }
  };
});
//card end