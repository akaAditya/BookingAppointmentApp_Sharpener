
function getCall(){
    // e.prevenyDefault();
    alert("Thank you for registeration, You will receive a call shortly");
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    // document.writeln("Slot Booked"+"<br>")
    // document.writeln("Name: "+ name+"<br>");
    // document.writeln("Email: "+ email+"<br>");
    // document.writeln("Phone: "+ phone+"<br>");
    // document.writeln("Date of Appointment: "+ date+"<br>");
    // document.writeln("Timings: "+ time+"<br>");

    // localStorage.setItem('UserName', name);
    // localStorage.setItem('Email', email);
    // localStorage.setItem('Phone', phone);
    // localStorage.setItem('Date', date);
    // localStorage.setItem('Time', time);
    // localStorage.getItem(key);
    let myObj = {
        Username : username,
        Email : email,
        Phone : phone,
        Date : date,
        Time : time
    }

    // let myObj_str = JSON.stringify(myObj);
    // localStorage.setItem(myObj.Email, myObj_str);
// POST data
    axios.post('https://crudcrud.com/api/29a50cd1167f4fce8c967eba29212abd/appointmentData', myObj)
    .then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    showUserOnScreen(myObj);
}
// GET data after reload

window.onload = function(myObj){
    axios.get('https://crudcrud.com/api/29a50cd1167f4fce8c967eba29212abd/appointmentData', myObj)
    .then((res)=>{
        for(let user=0; user<res.data.length; user++){
            showUserOnScreen(res.data[user]);
        }
        console.log(res.data)})
        .catch((err)=>{console.log(err)});
}

function showUserOnScreen(myObj){

    let parentElem = document.getElementById("listofitems");
    let childElem = document.createElement("li");
    childElem.textContent = myObj.Username+ ' - ' + myObj.Email+ ' - '+myObj.Phone+ ' - '+myObj.Date+' - '+myObj.Time;

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(myObj.Email);
        parentElem.removeChild(childElem);
    }
    const editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit';
    editButton.onclick = () =>{
        
        localStorage.removeItem(myObj.Email);
        parentElem.removeChild(childElem);
        document.getElementById("name").value = myObj.Username;
        document.getElementById("email").value = myObj.Email;
        document.getElementById("phone").value = myObj.Phone;
        document.getElementById("date").value = myObj.Date;
        document.getElementById("time").value = myObj.Time;

    }
        
    childElem.appendChild(deleteBtn);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);

    // parentElement.innerHTML = `<li>${myObj.Username} - ${myObj.Email} - ${myObj.Phone} - ${myObj.Date} - ${myObj.Time}</li>`
    // parentElement.appendChild
}