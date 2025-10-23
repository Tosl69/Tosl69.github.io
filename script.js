document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const bars = document.querySelectorAll(".bar .fill");
  bars.forEach(bar => {
    const value = bar.dataset.width || "50%";
    let width = 0;
    const targetWidth = parseInt(value);
    const step = () => {
      width++;
      if(width <= targetWidth){
        bar.style.width = width + "%";
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  });

  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => {
    sec.classList.add("reveal");
    observer.observe(sec);
  });

});
