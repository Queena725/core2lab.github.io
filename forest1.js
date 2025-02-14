document.addEventListener("DOMContentLoaded", () => {
  const fragments = document.querySelectorAll(".fragment");
  const dotNavigation = document.getElementById("dot");


  fragments.forEach((fragment, index) => {
    fragment.style.opacity = 0; 
    setTimeout(() => {
      fragment.style.transition = "opacity 1s ease";
      fragment.style.opacity = 1; 
    }, index * 500); 
  });


  const totalAnimationDuration = fragments.length * 500 + 1000; 
  setTimeout(() => {
    dotNavigation.style.display = "flex"; 
  }, totalAnimationDuration); 
});


document.addEventListener("scroll", () => {
  const spacer = document.querySelector("spacer-paragraph");
  const rect = spacer.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    spacer.classList.add("visible");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let actions = document.querySelector(".actions");
  if (actions) {
      actions.style.opacity = "5";
      actions.style.transform = "translateY(0)";
  }
});
