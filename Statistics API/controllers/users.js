const User = require('../model/user')


const getUsers = (req,res,next)=> {
    // TODO
    // Following bad lab code
    // need to query database for data instead of having a static array of data
    // for the response
    
    
    // const users = ['Karim', 'Hany']
    // res.send({
    //     users
    // });
}

const addUser = async (req,res,next) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.send(newUser);
    }
    catch (err) {
        res.status(400).send({message:err});
    }
}


exports.getUsers = getUsers;
exports.addUser = addUser;