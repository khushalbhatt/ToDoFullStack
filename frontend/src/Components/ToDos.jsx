export function ToDos(todos){
    async function updateValue(todoid){
        const updatePayload = {
            id: todoid
        }
        const response = await fetch('http://localhost:3000/completed',{
            method: 'PUT',
            body: JSON.stringify(updatePayload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response);
    }
    return(
        <div>
            {
                todos.todos.map((todo)=>{
                    return(
                        <div>
                            <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
                            <button onClick={()=>updateValue(todo._id)}>{todo.done == true ? "Completed" : "Mark as Complete"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}