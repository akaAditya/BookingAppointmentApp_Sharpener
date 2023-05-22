
function getCall(){
    // e.prevenyDefault();
    alert("Thank you for registeration, You will receive a call shortly");
    let name = document.getElementById("name").value;
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
        Username : name,
        Email : email,
        Phone : phone,
        Date : date,
        Time : time
    }

    let myObj_str = JSON.stringify(myObj);
    localStorage.setItem(myObj.Email, myObj_str);

    showUserOnScreen(myObj);
}

function showUserOnScreen(myObj){

    let parentElem = document.getElementById("listofitems");
    let childElem = document.createElement("li");
    childElem.textContent = myObj.Username+ ' - ' + myObj.Email+ ' - '+myObj.Phone+ ' - '+myObj.Date+' - '+myObj.Time;
    parentElem.appendChild(childElem);

    // parentElement.innerHTML = `<li>${myObj.Username} - ${myObj.Email} - ${myObj.Phone} - ${myObj.Date} - ${myObj.Time}</li>`
    // parentElement.appendChild
}