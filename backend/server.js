import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notfound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRouts.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRouts.js';
import uploadRoutes from './routes/uploadRoutes.js';
import morgan from 'morgan';
dotenv.config();

// MongoDB connect karo
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware



app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

// 1. Config Route (Client ID ke liye)
app.get('/api/config/1link', (req, res) => {
  // Ensure karein ke .env me CLIENT_ID mojood hai
  res.send(process.env.CLIENT_ID || 'SANDBOX_1LINK_ID'); 
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));




// 2. Payment Initiation Route (Jo frontend se POST request receive karega)
app.post('/api/payment', (req, res) => {
    const { orderId, amount } = req.body;
    
    console.log(`1LINK: Payment request received for Order ${orderId} - Rs. ${amount}`);

    // Sandbox Response: Asli integration me yahan 1LINK ki API call hogi
    res.status(200).json({
      status: 'success',
      message: 'Payment Request Sent to 1LINK Sandbox',
      orderId: orderId
    });
});

app.use(notfound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
