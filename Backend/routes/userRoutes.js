const express = require('express');
const router = express.Router();
const {
  signupUser,
  loginUser,
  check_auth_controller,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');
const{authMiddleware} = require('../middleware/authMiddleware');

// Public routes
router.post('/signup', signupUser);
router.post('/login', loginUser);

router.use(authMiddleware);

// Protected routes
router.get("/check-auth", check_auth_controller);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;