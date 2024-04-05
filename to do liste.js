const input = document.querySelector(".add");
const button = document.querySelector(".plus");

const itemContainer = document.querySelector(".item-container");

function addtask(input) {
  const todo = input.value;
  itemContainer.innerHTML += `
    <div class="item">
        <p class="item-title">${todo}</p>
        <p>*</p>
    </div>
    `;
}
button.addEventListener("click", function () {
  addtask(input);
});
document.body.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addtask(input);
  }
});
