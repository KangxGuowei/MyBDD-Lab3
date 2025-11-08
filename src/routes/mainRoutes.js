const express = require('express');
const router = express.Router();

//Import the userRoutes: 
// In the same file, import the userRoutes module by adding the following code:

const userRoutes = require('./userRoutes');

//Next, add the following code to define the routes:
router.use("/user", userRoutes);

//Export the router:
//At the end of the file, add the following code to export the router:

module.exports = router;
