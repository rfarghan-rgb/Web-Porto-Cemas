//menu button
document.getElementById("menubtn").onclick = () => {
  document.getElementById("menu").classList.toggle("open");
};
//menu button end


//card
const cards = document.querySelectorAll(".card");

  // 1. Find all your card elements
  document.querySelectorAll('.card').forEach(card => {
    // 2. Find the <img> tag sitting inside this specific card
    const img = card.querySelector('img');
    
    if (img) {
      // 3. Grab the 'src' value and automatically set the CSS variable!
      card.style.setProperty('--imgbg', `url('${img.src}')`);
    }
  });


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