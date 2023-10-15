const express = require('express')
const app = express()
const {getAllPosts, getPostsById} = require('./Services/getAllPosts')
const {users, userById} = require('./Services/getAllUsers')
const port = process.env.port || 3000

app.get('/posts', async (req, res)=>{
    const data = await getAllPosts()
    res.send(data)
})
app.get('/post/:id', async (req, res) => {
    const data = await getPostsById(req.params.id)
    res.status(200).send(data)
})

app.get('/users', async(req, res) => {
    const data = await users()
    res.status(200).send(data)
})

app.get('/user/:id', async(req, res) => {
    const data = await userById(req.params.id)
    res.status(200).send(data)
})

app.use((req, res, next) => {
    const error = new Error("Resource Not Found")
    next(error)
})
app.use((error, req, res, next) => {
    res.json({
        error: error.message
    })
})
app.listen(port, () => {
    console.log("server running")
});