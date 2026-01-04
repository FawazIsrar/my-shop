import express from 'express';
import { 
    addOrderItems, 
    getOrderById, 
    updateOrderToPaid, 
    getOrders, 
    updateOrderToDelivered, 
    getMyOrders 
} from '../controllers/orderController.js';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';

// Sab se pehle static routes
router.route('/myorders').get(protect, getMyOrders);

// Phir root routes
router.route('/')
    .post(protect, addOrderItems)
    .get(protect, admin, getOrders);

// Sab se aakhir mein ID wale dynamic routes
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;