let input = document.getElementById("todo-task")
let button = document.getElementById("btn")
let list = document.getElementById("todo-list")


let getlist = []

// to get item from local storage
const loadTodo = () => {
    return JSON.parse(localStorage.getItem("todo")) || []
}


// create local storage 
const createTodo = (todo) => {
    return localStorage.setItem("todo", JSON.stringify(todo))

}

// to remove data from local Storage
const removeList = (e) => {



    updatedList = getlist.filter((element) => element != e.target.textContent)

    createTodo(updatedList)
    list.innerHTML = ""
    display()


}


const addTodo = () => {


    getlist = loadTodo()

    let newTodo = input.value
    
    if(newTodo == ""){
        alert("write somthing to add..")
    }
    else {


        getlist.push(newTodo)

        createTodo(getlist)

        let li = document.createElement("li")
        li.innerHTML = newTodo
        list.append(li)

        input.value = ""


    }
}


// to show local storage data after refresh
const display = () => {
    getlist = loadTodo()
    getlist.forEach(element => {
        let li = document.createElement("li")
        li.innerHTML = element
        list.append(li)

    });
}



display()


list.addEventListener("click", (e) => {
    removeList(e)
})



