var list= document.getElementById("listing")
function add_item(){
    var todo = document.getElementById("todo_app")
    var todo_list = document.createElement("ol")
    var todo_list1 =document.createTextNode(todo.value)
    // todo_list.setAttribute("class","iq"
    todo_list.setAttribute("class","list-group-item list-group-item-warning")
     todo_list.appendChild(todo_list1)
    // console.log(todo_list)
    
    todo.value = ""     

    //delete button
    var dltbtn = document.createElement("button")
    var dltbtn1 = document.createTextNode("Remove")
    dltbtn.appendChild(dltbtn1)

    dltbtn.setAttribute("onclick","deleteItem(this)")
   dltbtn.setAttribute("class","btn btn-danger btn-sm")

   //Edit button

   var editbtn = document.createElement("button")
   var editbtn1 = document.createTextNode("Edit")
   editbtn.appendChild(editbtn1)
   editbtn.setAttribute("onclick","EditItem(this)")
   editbtn.setAttribute("class","btn btn-primary btn-sm")
   
  


 // list.setAttribute("class","listlist-group")


   list.appendChild(todo_list)
   todo_list.appendChild(editbtn)
  
   todo_list.appendChild(dltbtn)
  
}

function deleteAll(){
    list.innerHTML =""
}


function deleteItem(e){
    e.parentNode.remove()
}

function EditItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editvalue = prompt("edit Here",val)
    // console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue= editvalue
}