const express = require('express');
const app = express();
app.use(express.json());
const { createTodoSchema, updateTodoSchema } = require('./types.js');


app.get('/todos', (req, res) => {
    res.send('Hello World');
})  

app.post('/todos', (req, res) => {
   const createPayload = req.body;
   const parsedPayload = createTodoSchema.safeParse(createPayload);
   if(parsedPayload.success){
       res.send(parsedPayload.data);
   } else {
    res.status(411).send("Wrong Payload");
   }
})

app.put('/completed', (req, res) => {
   const updatePayload = req.body;
   const parsedPayload = updateTodoSchema.safeParse(updatePayload);
   if(parsedPayload.success){
       res.send(parsedPayload.data);
   } else {
    res.status(411).send("Wrong Payload");
   }
})



app.listen(3000, () => {
 
    console.log('Server is running on port 3000');
})