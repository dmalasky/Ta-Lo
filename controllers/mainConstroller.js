const uuid = require('uuid');


const User = require('../models/mainModel');

//This function will create a user
exports.createUser = async (req, res, next) => {
  //Check if the user exits
  User.findOne({ 'userName': req.body.userName }, async function (err, userLogin) {
    if (userLogin) {
       return res.status(401).json({'message': 'User already exist!'});
    } else {
        // User data to be saved
        const user = new User({
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          verifyPassword: req.body.verifyPassword,
          accountType: req.body.accountType,
          phone: req.body.phone
        });

        try {
          await user.save();
          res.status(201).json(user);
        } catch(err) { erroHandler(res, 501, "Error entering data!", err) }  
    }
  });
  
};

//Login the User
exports.logIn = async (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;
  
  User.findOne({ 'userName': userName }, function (err, userLogin) {
    if (!userLogin) {
      return res.status(401).json({'message': 'User does not exist!'});
    } else if (userLogin.password != password) {
      return res.status(403).json({'message': 'Wrong password!'});
    }
    const token = uuid.v4()
    return res.status(200).json({'token': token});
  });
};

