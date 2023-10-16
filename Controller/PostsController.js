const express = require('express')
const postsRouter = express.Router()
const {getAllPosts, getPostsById} = require('../Services/getAllPosts')

postsRouter.get('/posts',async(req, res) => {
    const data = await getAllPosts()
    return await res.status(data.status).send(data)
})
postsRouter.get('/posts/:id', async(req, res) => {
    const data = await getPostsById(req.params.id)
    return res.status(data.status).send(data)
})

module.exports = postsRouter