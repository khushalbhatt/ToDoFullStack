export function CreateToDo(){
    return(
        <>
            <h1>Create a new To Do</h1>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
                <br />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" />
                <br />
                <button type="submit">Create To Do</button>
        </>
    )
}