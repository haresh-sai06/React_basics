import React from 'react'

function ListItem({ item }){
    return(
        <li style={{color: item.completed? "green" : "red"}}>
            {item.text} - {item.completed ? "Good" : "Pending"}
        </li>
    )
}

function toDoList({todos, showOnlyPending}){
    const filteredList = showOnlyPending ? todos.filter(todo => !todo.completed) : todos;
    return(
        <div>
            <h2>To Do List</h2>
            <ul>
                {filteredList.length > 0 ? (
                    filteredList.map((todo,index) => (
                        <ListItem key={index} item={todo}></ListItem>
                    ))
                ) : (
                    <p>No todos to show</p>
                )} 
            </ul>
            {todos.length > 0 && (
                <p>Total Items: {todos.length}</p>
            )}
        </div>
    )
}

export default toDoList;