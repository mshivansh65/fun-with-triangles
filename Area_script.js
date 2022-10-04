const input2el = document.querySelector("#input-2");
const input3el = document.querySelector("#input-3");
const btnCheck = document.querySelector(".btn-check");
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
  // const input1 = Number(input1el.value);
  const input2 = Number(input2el.value);
  const input3 = Number(input3el.value);
  // console.log(input1 && input2, input3);
  if (Number.isNaN(input2) || Number.isNaN(input3)) {
    showMessage("enter a valid number");
  } else if (input2 > 0 && input3 > 0) {
    const ans = input2 * input3 * 0.5;

    dispalyAns(`Area is :${ans}`);
    // console.log((input2 ** 2 + input3 ** 2) ** 0.5);
  } else {
    showMessage("-ve legnts are not accepted");
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
