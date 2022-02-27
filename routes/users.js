const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users")



// router.all("/users/:id/*", (req, res) => {
//     res.status(404).send('<h1>Resource not found</h1>')
//   })

router.get('/users', usersController.list);


router.get("/users/:id", usersController.show);

router.post("/users", usersController.create);


router.put("/users/:id", usersController.update)



router.delete("/users/:id", usersController.deleteUsers)



module.exports = router;




