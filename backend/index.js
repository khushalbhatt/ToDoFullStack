const express = require('express');
const app = express();
app.use(express.json());
const { createTodoSchema, updateTodoSchema } = require('./types.js');
const { Todo } = require('./db.js');

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({});
})  

app.post('/todos', async (req, res) => {
   const createPayload = req.body;
   const parsedPayload = createTodoSchema.safeParse(createPayload);
   if(parsedPayload.success){
      await Todo.create({
           title: createPayload.title,
           description: createPayload.description,
           done: false
       })
       res.send("Todo Created");
   } else {
    res.status(411).send("Wrong Payload");
   }
})

app.put('/completed',async (req, res) => {
   const updatePayload = req.body;
   const parsedPayload = updateTodoSchema.safeParse(updatePayload);
   if(parsedPayload.success){
        await Todo.update({
            _id: req.body.id
        },{
            done: true
        })
        res.send("Todo is Updated");        
   } else {
    res.status(411).send("Wrong Payload");
   }
})



app.listen(3000, () => {
 
    console.log('Server is running on port 3000');
})
