import React from 'react'

const Form = ({inputVal, setInputVal, handleSubmit}) => {
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" value = {inputVal} 
            onChange = {evnt => setInputVal(evnt.target.value)} 
            placeholder = "Add todo item.."/>
            <button type = "submit">Add todo</button>
        </form>
    )
}

export default Form