export function ToDos(todos){
    return(
        <div>
            {
                todos.todos.map((todo)=>{
                    return(
                        <div>
                            <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
                            <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}