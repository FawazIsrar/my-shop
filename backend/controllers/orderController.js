import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import Order from '../models/orderModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
    const { 
        orderItems, 
        shippingAddress, 
        paymentMethod,
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice 
    } = req.body;

    // Diagnostic logs to help debug 500 errors
    console.log('addOrderItems req.user:', req.user);
    console.log('addOrderItems req.body:', req.body);

    // 1. Validate orderItems: must be a non-empty array
    if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
        res.status(400);
        throw new Error('orderItems must be a non-empty array');
    } else {
        // 2. SAFETY CHECK: Check karein ke req.user exist karta hai
        if (!req.user) {
            res.status(401);
            throw new Error('Not authorized, user missing');
        }

        const order = new Order({
            // Order items ko map karein taake field names match karein
            orderItems: orderItems.map((x) => ({
                ...x,
                product: x.product, // Ensure 'product' ID is present
                _id: undefined // Naya ID MongoDB khud banaye ga
            })),
            user: req.user._id, // Authentication middleware se aayega
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });

        try {
            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        } catch (err) {
            console.error('Order save error:', err.name, err.message);
            // Re-throw so existing error handling middleware handles the response
            throw err;
        }
    }
});
// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    );  

    if (order) {
        res.json(order);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        
        // SAFE PAYMENT RESULT: 1LINK aur PayPal dono ke liye handle kiya gaya hai
        order.paymentResult = {
            id: req.body.id || req.body.transactionId || '1LINK_PAYMENT_ID',
            status: req.body.status || 'success',
            update_time: req.body.update_time || Date.now().toString(),
            // Optional chaining (?) use kiya hai taaki undefined error na aaye
            email_address: req.body.email || (req.body.payer?.email_address) || 'no-email@example.com'
        };

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});
// Get all orders (Admin only)
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
});

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});



// Saare exports ek saath (Standard practice)
export { addOrderItems, getOrderById, updateOrderToPaid, getOrders , updateOrderToDelivered};