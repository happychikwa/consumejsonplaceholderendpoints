const express = require('express')
const app = express()
const postsrouter = require('./Controller/PostsController')
const usersrouter = require('./Controller/UsersController')
const port = process.env.port || 3000

app.use('/api', postsrouter)
app.use('/api', usersrouter)

app.use((req, res, next) => {
    const error = new Error("Resource Not Found")
    next(error)
})
app.use((error, req, res, next) => {
    res.status(404).json({
        error: error.message
    })
})
app.listen(port, () => {
    console.log("server running")
});