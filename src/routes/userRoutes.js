const express = require('express');
const router = express.Router();

//Step 2: Import the userController module: 
const controller = require('../controllers/userController');


//Step 3: Define the routes and associate them with the corresponding controller functions:
router.get('/', controller.readAllUser);
router.post('/', controller.createNewUser);

router.get('/:userid', controller.readUserById);
router.put('/:userid', controller.updateUserById);
router.delete('/:userid', controller.deleteUserById);

module.exports = router;
