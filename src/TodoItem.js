import React from 'react'

function TodoItem({todos, closeTodo}) {
    return (
        <>
        {   todos.map(todoItem => (
                <div key = {todoItem.todoId} className = "todoItem">
                    <p>{todoItem.todoText}</p>
                    <span onClick = {() => closeTodo(todoItem.todoId)}>X</span>
                </div>
            ))
        }
        </>
    )
}

export default TodoItem
