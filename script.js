showItems();
const loginBox = document.getElementById("login-box");
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", loginBoxDisplay);

const signUpButton = document.getElementById("sign-up");
const signUpBox = document.getElementById("sign-up-box");
signUpButton.addEventListener("click", signUpBoxDisplay);


function signUpBoxDisplay (e){
    if(signUpData){
        signUpBox.style.display = "block"
        loginButton.style.display = "none"
        signUpButton.style.display = "none"
    }
    else{
        alert("Please Fill the Form Curectly !")
    }
}

function loginBoxDisplay (e){
    if(loginButton.innerHTML === "Login"){
        console.log("login button is working")
        loginBox.style.display = "block"
        loginButton.style.display = "none"
        signUpButton.style.display = "none"
    }
    else if(loginButton.innerHTML === Logout){
        alert("hi you have loged out success full")
    }
}

const signUpData = (e) => {
    let formDataa ={
        fName: document.getElementById("fName").value,
        lName: document.getElementById("lName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
        //term: document.getElementById("term").value
    }
    localStorage.setItem('formDataa', JSON.stringify(formDataa));
    profileData();
    e.preventDefault();
    
 
}

//Profile Data
function profileData (){
    let {fName, lName, email, password} = JSON.parse(localStorage.getItem('formDataa'));
    let outPut = document.getElementById("profileData");
    outPut.style.display = "block"
    outPut.innerHTML =`
    <h3>Profile Details</h3>
    <table>
        <tbody>
            <tr>
                <td>First Name: </td>
                <td>${fName}</td>
            </tr>
            <tr>
                <td>Last Name: </td>
                <td>${lName}</td>
            </tr>
            <tr>
                <td>Email: </td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Password: </td>
                <td>${password}</td>
            </tr>
        </tbody>
    </table>
    <button type="submit" id="editProfile">EDIT PROFILE</button>
    `
    const editProfile = document.getElementById("editProfile");
    editProfile.addEventListener("click",function(){
        signUpBox.style.display = "block"
        const updateButton = document.getElementById("register");
        const regHeader = document.getElementById("regHeader");
        updateButton.innerHTML =  "UPDATE"
        regHeader.innerHTML =  "UPDATE YOUR PROFILE DETAILS"
    })
    document.getElementById("header").style.display = "none"
    signUpBox.style.display = "none"
    document.getElementById("dashboard").style.display = "block"
}

//login form submission
const userNameInput = document.getElementById("userNameInput");
const passwordInput = document.getElementById("passwordInput");
const error = document.getElementById("error");

function loginSubmissio (e){
    let {email, password} = JSON.parse(localStorage.getItem('formDataa'));
    if(  userNameInput.value  != email && passwordInput.value != password){
        error.style.display = "block"
        
        e.preventDefault()
    }
    
    else{
    document.getElementById("dashboard").style.display = "block"
    e.preventDefault();
    profileData();
    loginBox.style.display = "none"
    loginButton.style.display = "none"
    document.getElementById("header").style.display = "none"}
}


// To Do List Starts Here >
const addItemsInput = document.getElementById("addItemsInput");
const addItemsButton = document.getElementById("addItemsButton");
addItemsButton.addEventListener("click", function(){
    addItemsVal = addItemsInput.value;
    if(addItemsVal.trim() !=0){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObject = [];
        }else{
            taskObject = JSON.parse(webtask);
        }
        taskObject.push(addItemsVal);
        localStorage.setItem("localtask", JSON.stringify(taskObject));
    }
    showItems();
    addItemsInput.value = '';
    
})

//show Items
function showItems (){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObject = [];
    }else{
        taskObject = JSON.parse(webtask);
    }
    let html = '';
    let itemsTable =document.getElementById("itemsTable");
    taskObject.forEach((item, ind) =>{
        html +=`
        <tr>
            <th>${ind}</th>
            <td>${item}</td>
            <td> <button onclick="editItemButton(${ind});" class="itemButton">Edit</button> </td>
            <td> <button onclick="deleteItemButton(${ind});" class="itemButton">Delete</button> </td>
        </tr>
        `;
    });
    itemsTable.innerHTML = html;
}

//edit item
function editItemButton(ind){
    let saveItemIndex = document.getElementById("saveItemsButton");
    let addItemBtn = document.getElementById("addItemsButton");
    let saveEditedItem = document.getElementById("saveEditedItem");
    saveEditedItem.value = ind;
    let webtask = localStorage.getItem("localtask");
    let taskObject = JSON.parse(webtask);
    addItemsInput.value = taskObject[ind];
    addItemBtn.style.display = "none";
    saveItemIndex.style.display = "block";
}

let addItemBtn = document.getElementById("saveItemsButton");
addItemBtn.addEventListener("click", function(){
    let webtask = localStorage.getItem("localtask");
    let taskObject = JSON.parse(webtask);
    let saveEditedItem = document.getElementById("saveEditedItem").value;
    taskObject[saveEditedItem] = addItemsInput.value;
    localStorage.setItem("localtask", JSON.stringify(taskObject));
    addItemBtn.style.display = "none"
    document.getElementById("addItemsButton").style.display = "block"
    addItemsInput.value = '';
    showItems();
})

// delete item
function deleteItemButton (ind){
    let webtask = localStorage.getItem("localtask");
    let taskObject = JSON.parse(webtask);
    taskObject.splice(ind, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObject));
    showItems();
}

const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", logoutClicked);

function logoutClicked () {
    location.reload();
}












