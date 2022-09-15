const input2el = document.querySelector("#input-2");
const input3el = document.querySelector("#input-3");
const btnCheck = document.querySelector(".btn-check");
const optionsEl = document.querySelectorAll(".option");
// btnCheck.addEventListener("click", function () {});
const inputAns = [-1, -1];
const rightAns = [2, 3];
let score = 0;
document.addEventListener("click", function (e) {
  if (e.target.closest(".option-list-item")) {
    const targetEl = e.target.closest(".option-list-item");
    const qus = targetEl.dataset.qus;
    const key = targetEl.dataset.key;

    updateAns(qus, key);
    unckeckAllRadioExcept(qus, key);
  }
});

function updateAns(qus, key) {
  inputAns[qus - 1] = Number(key);
}

function unckeckAllRadioExcept(qus, key) {
  optionsEl.forEach((btn) => {
    if (btn.closest(".option-list-item").dataset.qus === qus) {
      const t = btn.closest(".option-list-item");

      if (t.dataset.key !== key) {
        console.log(btn.closest(".option-list-item"));
        btn.checked = false;
      } else {
        btn.checked = true;
      }
    }
  });
}
btnCheck.addEventListener("click", function () {
  rightAns.forEach((ans, i) => {
    if (ans === inputAns[i]) {
      score++;
    } else {
      score--;
    }
  });
  // console.log(`final ans ${score}`);
  dispalyAns(`Final ans ${score}`);
});
function dispalyAns(message) {
  if (document.querySelector(".text-area")) {
    let element = document.querySelector(".text-area");
    element.parentNode.removeChild(element);
  }
  const htmlToIsterted = `<div class="text-area">${message}</div>`;
  btnCheck.insertAdjacentHTML("afterend", htmlToIsterted);
}
//
