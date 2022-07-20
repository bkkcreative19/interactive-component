const ratingsEle = document.querySelectorAll(".rating");
const selected = document.querySelector(".selected");

let ratingNum;
let active;

// ratingsEle.forEach((ratingEle) =>
//   ratingEle.addEventListener("click", (e) => clearActive(e, ratingEle))
// );

// ratingsEle.forEach((ratingEle) =>
//   ratingEle.addEventListener("click", (e) => setActive(e, ratingEle))
// );

// function setActive(e, ratingEle) {
//   ratingEle.classList.add("active");
// }
// function clearActive(e, ratingEle) {
//   if (ratingEle.classList.contains("active")) {
//     ratingEle.classList.remove("active");
//   }
// }

document.querySelectorAll(".rating").forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const elems = document.querySelector(".active");
    if (elems !== null) {
      elems.classList.remove("active");
    }
    ratingNum = Number(rating.getAttribute("data-rating"));
    e.target.classList.add("active");

    //   todoList.filterTodos(filter.getAttribute("data-option"));
    //   ui.renderTodos(todoList.filteredTodos);
  });
});

document.querySelector("button").addEventListener("click", submit);

function submit() {
  const defaultEle = document.querySelector(".default");
  const thankYouEle = document.querySelector(".thank-you");
  const selected = document.querySelector(".selected");
  selected.textContent = `You selected ${ratingNum} out of 5`;

  defaultEle.style.display = "none";
  thankYouEle.style.display = "flex";
}
