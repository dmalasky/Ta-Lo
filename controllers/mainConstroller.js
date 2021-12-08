exports.test = async (req, res, next) => {
    console.log("test")
};

//This function will create a user
exports.createUser = async (req, res, next) => {
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
};

//Login the User
exports.logIn = async (req, res, next) => {
    console.log("Login")
};

