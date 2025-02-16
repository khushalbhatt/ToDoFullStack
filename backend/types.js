const zod = require('zod');

const createTodoSchema = zod.object({
    title : zod.string(),
    description: zod.string(),
    done : zod.boolean()
})

const updateTodoSchema = zod.object({
    id : zod.string(),
    done : zod.boolean()
})

module.exports = {
    createTodoSchema,
    updateTodoSchema
}
