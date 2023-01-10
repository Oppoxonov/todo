import React from "react";
import { Button2, Detail,Button1, Head, Icon } from "./style";
 

const Todo=({value, dispatch, })=>{
    return (
        <Detail>
            <Head style={{textDecoration: value.completed? 'line-through' :''}}>{value.name}</Head>
            <Button1 onClick={()=>dispatch({type: 'toggle', payload: {id: value.id}})}>  <Icon.Chek/>  </Button1>
            <Button2 onClick={()=>dispatch({type: 'delete', payload: {id: value.id}})}>x</Button2>
        </Detail>
    )
}
export default Todo