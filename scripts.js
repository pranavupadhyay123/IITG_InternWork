//project
// Dark & Light toggle

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".day-night input").addEventListener("change", () => {
      document.body.classList.add("toggle");
      setTimeout(() => {
          document.body.classList.toggle("light");
          setTimeout(() => {
              document.body.classList.remove("toggle");
          }, 500); // Adjust duration to match CSS transition
      }, 5);
  });
});