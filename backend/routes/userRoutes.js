import express from 'express';
import { authUser,getUserProfile,registerUser, updateUserProfile, 
    getUsers , deleteUser,getUserById,updateUser} from '../controllers/userController.js';
const router = express.Router();
import { protect , admin } from '../middleware/authMiddleware.js';


router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/').get(protect,admin,getUsers);
router.route('/:id').delete(protect,admin,deleteUser);
router.route('/:id').get(protect,admin,getUserById);
router.route('/:id').put(protect,admin,updateUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);




export default router;