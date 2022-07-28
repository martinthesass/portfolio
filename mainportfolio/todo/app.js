// **** Select Items ******

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//edit option

let editElement;
let editFlag = false;
let editId = "";



// **** Event Listeners ******
//submit form
form.addEventListener("submit", addItem);

//clear items

clearBtn.addEventListener("click",clearItems);

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag){
        const element = document.createElement("article");
        //add class
        element.classList.add("grocery-item");
        //add id
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class=btn-container>
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>

            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>

        </div>`;
        
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");

        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);
        



        //append child
        list.appendChild(element);
        //display alert
        displayAlert("item added fool", "success");
        //show container
        container.classList.add("show-container");
        //add to local storage
        addToLocalStorage(id, value);

        //set back to default
        setBackToDefault();
    }
    else if (value && editFlag){editElement.innerHTML = value;

            displayAlert("Make up your mind fool!", "success");
            //edit local storage
        editLocalStorage(editId,value);

            setBackToDefault()}

        else{
            displayAlert("Enter something fool!", "danger");
        }
    }

    

    //alert function

    function displayAlert(text, action){
        alert.textContent = text;
            alert.classList.add(`alert-${action}`);

    //remove alert

    setTimeout (function(){
        alert.textContent = "";
            alert.classList.remove(`alert-${action}`);
    }, 2000);}

    //clear items

    function clearItems(){
        const items = document.querySelectorAll(".grocery-item");

        if(items.length > 0) {
            items.forEach(function(item){
                list.removeChild(item)
            });
        }
        container.classList.remove("show-container");
        displayAlert("list cleared", "danger");
        setBackToDefault();
        //localstorage.removeItem("list");
    }

    //delete function

    function deleteItem(e){
        const element = e.currentTarget.parentElement.parentElement;
        const id = element.dataset.id;
        list.removeChild(element);
        if(list.children.length === 0){
            container.classList.remove("show-container");
        }
        displayAlert("item removed", "success");
        setBackToDefault();
        //remove from local storage
        //removeFromLocalStorage(id);
    }

    //edit function

    function editItem(e){
        const element = e.currentTarget.parentElement.parentElement;
        //set edit items
        editElement = e.currentTarget.parentElement.previousElementSibling;
        //set form value
        grocery.value = editElement.innerHTML;
        editFlag = true;
        editId = element.dataset.id;
        submitBtn.textContent = "edit";

    }

    //set back to default

    function setBackToDefault(){
        grocery.value ="";
        editFlag = false;
        editId = "";
        submitBtn.textContent = "submit";
    }

    /**LOCAL STORAGE */

    function addToLocalStorage(id, value) {
        const grocery = {id, value};
        let items = localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[];
        items.push(grocery);
        localStorage.setItem("list",JSON.stringify(items))
    };

    /****ADD to local storage */


    function removeFromLocalStorage(id){};
    function editLocalStorage(id, value){};
        //remove from local storage
        //function removeFromLocalStorage(id);
    




