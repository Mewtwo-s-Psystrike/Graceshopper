
function requireUser(req, res, next) {    

  console.log('req.user--->', req.user);

    if (!req.user) {
      res.status(401).send({
      error: "User not logged in",
      name: "MissingUserError", 
      message: "You must be logged in to perform this action"
        });
      }
      next();  
  } 


module.exports = {requireUser};