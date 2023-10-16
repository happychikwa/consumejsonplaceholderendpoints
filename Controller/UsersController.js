const express = require('express')
const usersRouter = express.Router()

const { getAllusers, getUserById } = require('../Services/getAllUsers')

usersRouter.get('/users', async(req, res, next) => {
    const data = await getAllusers();
    return res.status(data.status).send(data)
})

usersRouter.get('/user/:id', async (req, res) => {
    return res.status(200).send(await getUserById(req.params.id))
})

module.exports = usersRouter