import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} type="text" placeholder="Ender Todo..." />

            <button onClick={()=>{
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}