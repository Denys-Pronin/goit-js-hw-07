function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputValue = document.querySelector("input");
const wrapper = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  const boxArr = [];
  if (wrapper.children.length > 0) {
    wrapper.innerHTML = "";
  }

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.height = size + "px";
      box.style.width = size + "px";
      box.style.backgroundColor = getRandomHexColor();
      boxArr.push(box);
      size += 10;
    }
    wrapper.append(...boxArr);
  } else {
    console.log("fail");
  }
}

function destroyBoxes() {
  wrapper.innerHTML = "";
}

btnCreate.addEventListener("click", (event) => {
  createBoxes(inputValue.value);
  inputValue.value = "";
});
btnDestroy.addEventListener("click", (event) => {
  destroyBoxes();
});
