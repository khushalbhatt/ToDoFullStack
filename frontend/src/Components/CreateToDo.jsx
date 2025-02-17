import { useState } from "react";

export function CreateToDo(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    async function Addtodo(){{
        const createPayload = {
            title: title,
            description: description
        }
        const response = await fetch('http://localhost:3000/todos',{
            method: 'POST',
            body: JSON.stringify(createPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response);
    }}
    return(
        <>
            <h1>Create a new To Do</h1>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" onChange={(e)=>setTitle(e.target.value)}/>
                <br />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" onChange={(e)=>setDescription(e.target.value)}/>
                <br />
                <button type="submit" onClick={()=>Addtodo()}>Create To Do</button>
        </>
    )
}