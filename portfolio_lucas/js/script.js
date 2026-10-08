document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mousedown", () => {
    link.style.transform = "scale(0.98)";
  });

  link.addEventListener("mouseup", () => {
    link.style.transform = "";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "";
  });
});
