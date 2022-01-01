const express = require("express");
const { getUsers, addUser } = require("../controllers/users");

const router = express.Router();


// router.use((req,res,next) => {
//     console.log('My amazing validator middleware')
//     const name = req.body.name;
//     if (name){
//         if (name.length < 5){
//             res.status(404).send({
//                 error: "Name must be more than 4 characters"
//             })
//         }
//         else{
//             next();
//         }
//     }
// })

router.route("/")
        .get(getUsers)
        .post(addUser);

module.exports = router;
