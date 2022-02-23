const users = require("../data/index")

const list = (req, res) => {
    console.log('retrieving users...')
    res.json(users)
}

const show = (req, res) => {
    const id = req.params.id

    // if (user.id !== Number(id)) {
    //     res.status(404).send('<h1>Resource not found</h1>')
    // }

    res.json(users.find((user) => {
        return user.id == Number(id)
    }))
}

const create = (req, res) => {
    console.log(req.body)

    let counter = users.length + 1
    const newUser = { id: counter, ...req.body}
    
    users.push(newUser)
    res.json(users[counter])
}


const update = (req, res) => {
    console.log(req.body)
    let id = req.params.id

    const userUpdate = users.find((user) => {
        return user.id == Number(id)
    })

    const updatedUser = {...userUpdate, ...req.body}

    res.json(updatedUser)
}

const deleteUsers = (req, res) => {
    const id = req.params.id
    const filteredUsers = users.filter((user) => {
        user.id !== Number(id)
    })

    
    res.json(filteredUsers)
}



module.exports = {list, show, create, update, deleteUsers}