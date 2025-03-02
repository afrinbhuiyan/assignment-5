const completedButtons = document.querySelectorAll(".completed-btn");

for (let btn of completedButtons) {
  btn.addEventListener("click", function () {
    alert("Board updated Successfully");
    btn.disabled = true;
    btn.classList.add("disabled:bg-blue-200");
    const taskAssigned = document.getElementById("task-assigned");
    const task = parseInt(taskAssigned.innerText);
    taskAssigned.innerText = task - 1;

    if (parseInt(taskAssigned.innerText) === 0) {
      alert("Congrats!!! You have completed all the current task");
    }

    const completeValue = document.getElementById("complete-value-btn");
    const convertedCompleteValue = parseInt(completeValue.innerText);
    completeValue.innerText = convertedCompleteValue + 1;

    const allHistory = document.getElementById("all-history");
    const parentElement = btn.parentElement.parentElement;
    const title = parentElement.childNodes[3].innerText;

    const x = new Date();
    const time = x.toLocaleTimeString();

    const p = document.createElement("p");
    p.innerHTML = `<p class="p-4 bg-bg-Secondary-color rounded-lg mt-7">You have Complete The Task ${title} at ${time} PM</p>`;
    allHistory.appendChild(p);

    document
      .getElementById("clear-history")
      .addEventListener("click", function () {
        allHistory.innerText = " ";
      });
  });
}

const setDate = document.getElementById("date");
const date = new Date();
const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "2-digit",
};
const formattedDate = date.toLocaleDateString("en", options);
setDate.innerText = formattedDate;

document.getElementById("blogs").addEventListener("click", function () {
  window.location.href = "./blogs.html";
});

const randomColorBtn = document.getElementById("random-color-btn");
randomColorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = generatorRandomColor();
});

function generatorRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
