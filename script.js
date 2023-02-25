const addNewRow = document.getElementById("addnew")
const bodydata = document.getElementById("data")
const tabledata = [];

function savedata(name, rollno , subject, marks, markedby){
    addNewRow.disabled  = false

    if(name =="" || rollno =="" || subject =="" || marks == ""|| markedby ==""){
        alert("Please fill the details");
    }
    if(markedby.includes("@") == false){
        alert("please enter valid Email")
    }
    else{
        let data = {id:tabledata.length+1 , std_Name : name, std_rollno : roll, subject:subject, Marks:marks, MarkedBy : markedby}
        console.log("New Record Entered:", info);
        tabledata.push(info);
        bodydata.innerHTML= tabledata.map((parameter, ind) => {
            return (`<tr><td>${parameter.id} </td>
                <td>${parameter.std_Name}</td>
            <td>${parameter.std_rollno}</td>
            <td>${parameter.subject}</td>
            <td>${parameter.Marks}</td>
            <td>${parameter.MarkedBy}</td>
            `)
        }).join("")
    }
}
addNewRow.addEventListener("click", () =>{
    bodydata.innerHTML = bodydata.innerHTML+`
    <td>${tabledata.length+1}</td>
    <form>
        <td> <input  id ="studentname" type="text"/></td>
            <td><input  id ="roll_no" type="text"/></td>
            <td><input  id ="subject" type="text"/></td>
            <td><input  id ="marks" type="number"/></td>
            <td><input  id ="markedby" type="email"/></td>
            <td><button id = "savebutton" onclick="submitdata(document.getElementById('studentname').value,document.getElementById('roll_no').value,document.getElementById('subject').value,document.getElementById('marks').value,document.getElementById('markedby').value)">Save</button></td>
        </form>`
        addNewRow.disabled = true
})