const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("btn");
function addTask() {
    if(inputBox.value == '') //if input box is empty
    {
        alert("You must write something!");
    }
    else //if input box is not empty 
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //unicode for multiplication sign (x)
        li.appendChild(span);
    }
    inputBox.value = ""; //clear the input box after adding a task
    saveData(); //save the updated list to local storage
}

button.addEventListener("click", addTask);

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName == "LI") //if the clicked element is a list item
    {
        e.target.classList.toggle("checked"); //toggle the 'checked' class
    }
    else if(e.target.tagName == "SPAN") //if the clicked element is a span (the x button)
    {
        e.target.parentElement.remove(); //remove the parent list item
    }
}, false);

function saveData() 
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData()
{
    console.log(localStorage.getItem("data"));
    listContainer.innerHTML = localStorage.getItem("data");
}
getData(); //load the saved list from local storage when the page loads
