import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile, 
    getUsers, deleteUser, getUserById, updateUser } from '../controllers/userController.js';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);

// ✅ STATIC route hamesha DYNAMIC (:id) se upar hona chahiye
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

// ❌ Dynamic routes hamesha niche hone chahiye
router.route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser);

export default router;