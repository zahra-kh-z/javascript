
// localStorage.clear()  // for clear all local storage
// window.localStorage.removeItem('tasks'); // delete a localStorage item by keyName

// var tasks = []; // for empty aaray in each Browser refresh
var tasks = JSON.parse(localStorage.getItem('tasks')) ;
localStorage.setItem("tasks", JSON.stringify(tasks)); //store tasks

// for show list of all task
const storedItems = JSON.parse(localStorage.getItem('tasks'));
console.log(storedItems);
let list = document.getElementById("my_lst_ul");
storedItems.forEach((item)=>{
    const li = document.createElement('li');
    const i = document.createElement('i');
    li.className = 'list-group-item justify-content-between d-flex'
    li.id = 'new-item'
    li.appendChild(document.createTextNode(item));
    i.className = 'fas fa-times fa-2x text-danger mr-auto del-item submit';
    i.setAttribute("type", "submit");
    li.appendChild(i);
    document.querySelector('ul.list-group').appendChild(li);
  })

// for add one task with press add button
var allSubjectName = {}; // In global scope
let user; // In global scope
document.querySelector('.click_add').addEventListener('click', function (event){
    const task=document.getElementById("task").value; // console.log(task);
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    var lst = localStorage.getItem("tasks"); // Get your data from local storage
    if(task!="" && lst.includes(task)!=true){
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    var input = document.getElementById("task");
    sessionStorage.user = JSON.stringify({name: input.value});
    user = JSON.parse( sessionStorage.user ); // alert( user.name ); // task

    const li = document.createElement('li');
    const i = document.createElement('i');
    li.className = 'list-group-item justify-content-between d-flex'
    li.id = 'new-item'
    li.appendChild(document.createTextNode(input.value));
    i.className = 'fas fa-times fa-2x text-danger mr-auto del-item submit';
    i.setAttribute("type", "submit");
    i.setAttribute("type", "submit");
    li.appendChild(i);
    // li.setAttribute('onclick', 'del_select();'); 
    console.log(li);
    document.querySelector('ul.list-group').appendChild(li);
    // document.getElementById('task').value='';
    alert(user.name+' Task added successfully.');

    } else if (lst.includes(task)===true){
        alert('The task is duplicate or empty.');
    } 
    
    // del_select();
    var allSubjectName = document.querySelectorAll(".list-group-item");
    console.log(allSubjectName);
    for (var index = 0; index <allSubjectName.length; index++){
        allSubjectName[index].querySelector("i").addEventListener("click", function(){
            var show_li=this.closest(".list-group-item"); // console.log(show_li.textContent);
            console.log(show_li.textContent);
            var show_text_li = show_li.textContent;
            console.log(show_text_li);
            let show_index_li = tasks.findIndex(id => id == show_text_li);
            console.log(show_index_li);
            this.closest(".list-group-item").remove();
            // deleteItem(show_index_li);
        });
    }

event.preventDefault();
});

 //key is the index of the array, while second parameter 1 is to represent how many item to be removed starting from key index
function deleteItem(key){
    this.tasks.splice(key,1); // delete item at index
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    // const index = tasks.findIndex(item => item === Number(key));
    // tasks = this.tasks.filter(item => item !== Number(key));
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    };

const my_li = document.querySelectorAll('li')
const my_ul = document.querySelector('ul')
const my_i = document.querySelector('i')

// for del all task with press delete button
document.querySelector('.click_del').addEventListener('click', function(event){
    my_ul.remove()
    alert('Tasks were successfully deleted.')
    window.localStorage.removeItem('tasks'); //clear localstorage
    var tasks = [];
    localStorage.setItem("tasks", JSON.stringify(tasks)); //store tasks
    event.preventDefault()
})

// this is work for del li in html befor localstorage created and add new tasks
var allSubjectName = document.querySelectorAll(".list-group-item");
console.log(allSubjectName);
   for (var index = 0; index <allSubjectName.length; index++){
      allSubjectName[index].querySelector("i").addEventListener("click", function(){
        var show_li=this.closest(".list-group-item");
        console.log(show_li.textContent);
        var show_text_li = show_li.textContent;
        console.log(show_text_li);
        let show_index_li = tasks.findIndex(id => id == show_text_li);
        console.log(show_index_li);
        this.closest(".list-group-item").remove();
        deleteItem(show_index_li);
        alert('Task successfully deleted.');
      });
   }
  
// for show all task
document.querySelector('.click_show').addEventListener('click', function (event){
    addClass()
});

function addClass() {
    var v = document.getElementById("my_lst_ul");
    v.className += "d-block";
}

// for cleare input box
document.querySelector('.click_reset').addEventListener('click', function (event){
    document.getElementById('task').value='';
});


// // for del one task with press icon befor localstorage created
// document.querySelector('.del-item').addEventListener('click', function deleteTask(){
//     // my_ul.removeChild(my_li[0])
//     alert('Task successfully removed.')
// })

// //Delete task.
// var deleteTask=function(){
//     var listItem=this.parentNode;
//     var ul=listItem.parentNode;
//     ul.removeChild(listItem); //Remove the parent list item from the ul.
// }

// function del_selected_item(my_task){
//     const idToRemove = my_task;
//     const filteredPeople = tasks.filter((item) => item !== idToRemove);
//     console.log(filteredPeople);
//     window.localStorage.removeItem('tasks'); //clear localstorage
//     var tasks = [];
//     localStorage.setItem("tasks", JSON.stringify(filteredPeople)); //store tasks
// }