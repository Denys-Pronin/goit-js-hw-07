function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const btn = document.querySelector(".change-color");
  const bodyColor = document.querySelector("body");
  const spanColor = document.querySelector(".color");

  btn.addEventListener("click", (event) => {
    const color = getRandomHexColor();
    bodyColor.style.backgroundColor = color;
    spanColor.style.color = color;
  });
}

changeColor();
