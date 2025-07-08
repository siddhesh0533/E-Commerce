import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import connectCloudinary from './config/cloudinary.js';
import orderRouter from './routes/orderRoute.js';

// App Configuration
const app = express();
const PORT = process.env.PORT || 3000;
connectDB()
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => { 
  res.send('Welcome to the API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});