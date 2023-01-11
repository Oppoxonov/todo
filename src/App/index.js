import React from "react";
import { Conteiner,First, List,Input, Button3 } from "./style";
import { useReducer, useState } from "react";
import Todo from "./Todo";


const App =()=>{
const reduce =(state,action)=>{
    switch(action.type) {
        case 'add': 
            if(action.payload.name.trim() !==''){
                return [...state, {id: Date.now(), name: action.payload.name, completed: false }]
                }
            else return state;    
        case 'toggle':
            return state.map((todo)=>{
                if(todo.id === action.payload.id) {
                    return {...todo, completed: true} //!todo.completed }
                }
                return todo;
            })
        case 'delete': 
            return state.filter((todo)=>todo.id !== action.payload.id)    
        default: return state;
    }
}
const handleSubmit=()=>{
    dispatch ({type: 'add', payload:{name:name}});
    setName('');

}
    const [name, setName]=useState('')
    const[todos, dispatch]=useReducer(reduce,[])
    return (
    <First>    
        <Conteiner>
            <List> Todo List </List>           
            Add todo
            <Input placeholder="Add new todo" value={name} onChange={(e)=>setName(e.target.value)}/>
            <Button3 onClick={handleSubmit}> Submit</Button3>
            {
                todos.map((value)=>{
                    return (
                    <Todo value={value} dispatch={dispatch} />)
                })
            }
        </Conteiner>
    </First>
    
)
}
export default App