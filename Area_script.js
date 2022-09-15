const input2el = document.querySelector("#input-2");
const input3el = document.querySelector("#input-3");
const btnCheck = document.querySelector(".btn-check");
btnCheck.addEventListener("click", function () {
  // const input1 = Number(input1el.value);
  const input2 = Number(input2el.value);
  const input3 = Number(input3el.value);
  // console.log(input1 && input2, input3);
  if (Number.isNaN(input2) || Number.isNaN(input3)) {
    alert("enter a valid number");
  } else if (input2 > 0 && input3 > 0) {
    const ans = input2 * input3 * 0.5;

    dispalyAns(`Area is :{ans}`);
    // console.log((input2 ** 2 + input3 ** 2) ** 0.5);
  } else {
    alert("-ve legnts are not accepted");
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
