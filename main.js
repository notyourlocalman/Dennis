document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");

  const openGift = () => {
    document.body.classList.remove("container");
    overlay.classList.add("overlay--hidden");
    overlay.removeEventListener("click", openGift);
  };

  overlay.addEventListener("click", openGift);
});
