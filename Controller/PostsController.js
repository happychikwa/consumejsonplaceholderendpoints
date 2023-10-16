const express = require('express')
const postsRouter = express.Router()
const {getAllPosts, getPostsById} = require('../Services/getAllPosts')

postsRouter.get('/posts',async(req, res) => {
    return await res.status(200).send(await getAllPosts())
})
postsRouter.get('/posts/:id', async(req, res) => {
    return res.status(200).send(await getPostsById(req.params.id))
})

module.exports = postsRouter