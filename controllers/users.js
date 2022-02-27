const users = require("../data/index")
const newUser = require("../data/sampleUser")

const list = (req, res) => {
    console.log('retrieving users...')
    res.json(users)
}

const show = (req, res) => {
    const id = req.params.id

    const found = users.find((user) => {
        return user.id === Number(id)
    })

    if (found === undefined) {

        res.status(404).send('<h1>That user id does not exist</h1>')

    } else {

       res.json(found)
    
    }

   
}

const create = (req, res) => {
    console.log(req.body)

    let counter = users.length + 1
    const finalNewUser = { id: counter, ...newUser}
    
    users.push(finalNewUser)
    res.json(users[counter])
}


const update = (req, res) => {
    console.log(req.body)
    let id = req.params.id

    const userUpdate = users.find((user) => {
        return user.id === Number(id)
    })

    if (userUpdate === undefined) {
        res.status(404).send('<h1>Cannot Update User</h1>')
    } else {
        res.json(userUpdate)
    }

    const updatedUser = {...userUpdate, ...req.body}

    res.json(updatedUser)
}

const deleteUsers = (req, res) => {
    const id = req.params.id
    const filteredUsers = users.filter((user) => {
        user.id !== Number(id)
    })

    if (filteredUsers.length === 0) {
        res.status(404).send('<h1>Could not delete User</h1>')
    }

    
    res.json(filteredUsers)
}



module.exports = {list, show, create, update, deleteUsers}