const data = require('../data.js');

console.log(data.user.map(user=> user.username));

//Implement the readAllUser function 

var userController={

    readAllUser: (req, res, next) => {
      try {
        res.status(200).json(data.user);
      } catch (error) {
        console.error("Error readAllUser:", error);
        res.status(400).json(error);
      }
    }
//Implement the readUserById function 
    ,readUserById: (req, res, next) => {
  try {
    const userid= req.params.userid;

    var userFd;
    for(user of data.user){
       if(user.userid==userid){
          userFd=user;
          break;
      }

   }
    if (!userFd) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error("Error readUserById:", error);
    res.status(500).json(error);
  }
}

//  Implement the createNewUser function 
,createNewUser: (req, res, next) => {

  try {
    var user = {
      userid: data.user[data.user.length-1] .userid+ 1,
      username: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: req.body.password
    }
    data.user.push(user);

    res.status(201).json({
      message: "User created"
    });
  } catch (error) {
    console.error("Error createNewUser:", error);
    res.status(500).json(error);
  }
}

//Implement the updateUserById function
,updateUserById : (req, res, next) =>
{
   
    try
    {
        var userid= req.params.userid;

        var userFd;
        for(user of data.user){
           if(user.userid==userid){
              userFd=user;
              break;
          }

       }
        if(!userFd)
        {
            res.status(404).json({
                message: "User not found"
            });
        }
        else
        {
            userFd.username = req.body.username;
            userFd.email= req.body.email;
            userFd.role= req.body.role;
            userFd.password= req.body.password;

            res.status(204).send();
        }
    }
    catch(error)
    {
        console.error("Error updateUserById:", error);
        res.status(500).json(error);
    }
}

// Implement the deleteUserById function 
,deleteUserById : (req, res, next) => {
  try {
     var userid= req.params.userid;

      var userFd;
      var indexFd
      var index=0;
      for(user of data.user){
          if(user.userid==userid){
             userFd=user;
             indexFd=index;
             break;
         }
         index++;
     }

    if (!userFd) {
      res.status(404).send("User not found");
    } else {
      data.user.splice(indexFd,1); //removes item at index position
      res.status(204).send();
    }
  } catch (error) {
    console.error("Error deleteUserById:", error);
    res.status(500).json(error);
  }
}
}


module.exports=userController;