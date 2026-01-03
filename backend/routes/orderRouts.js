import express from 'express';
    import { addOrderItems, getOrderById, updateOrderToPaid , getOrders, updateOrderToDelivered} from '../controllers/orderController.js';
    const router = express.Router();
import { protect,admin } from '../middleware/authMiddleware.js';


router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/').get(protect, admin, getOrders);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);



export default router;