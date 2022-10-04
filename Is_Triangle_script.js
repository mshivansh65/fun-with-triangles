// console.log("hey");
const input1el = document.querySelector("#input-1");
const input2el = document.querySelector("#input-2");
const input3el = document.querySelector("#input-3");
const btnCheck = document.querySelector(".btn-check");
const textArea = "";
// overlay
const overlay = document.querySelector(".overlay");
const message = document.querySelector("#message");
const backdrop = document.querySelector(".backdrop");
const overlayBtn = document.querySelector("#overlay-btn");

function showMessage(recivedMessage = "") {
  overlay.classList.remove("hidden");
  backdrop.classList.remove("hidden");
  message.innerHTML = recivedMessage;
}
function hideOverlay() {
  overlay.classList.add("hidden");
  backdrop.classList.add("hidden");
}
hideOverlay();
overlayBtn.addEventListener("click", hideOverlay);
backdrop.addEventListener("click", hideOverlay);
// END OVERLAY CODE
btnCheck.addEventListener("click", function () {
  const input1 = Number(input1el.value);
  const input2 = Number(input2el.value);
  const input3 = Number(input3el.value);
  // console.log(input1 && input2, input3);
  if (Number.isNaN(input1) || Number.isNaN(input2) || Number.isNaN(input3)) {
    showMessage("enter a valid number");
  } else if (input1 > 0 && input2 > 0 && input3 > 0) {
    if (input1 + input2 + input3 === 180) {
      // console.log(`triangle`);
      dispalyAns(`It is a Triangle`);
    } else {
      // console.log(`not a triangle`);
      dispalyAns(`It is not a triangle`);
    }
  } else if (input1 < 0 || input2 < 0 || input3 < 0) {
    showMessage("-ve angles are not accepted");
  } else {
    showMessage("input soemthing");
  }
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
