import express from 'express';
import {addToCart, updateCart, getUserCart} from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const cartRouter = express.Router();

// Get user cart data
cartRouter.post('/get', authUser, getUserCart);

// Add products to user cart
cartRouter.post('/add', authUser, addToCart);

// Update user cart
cartRouter.post('/update', authUser, updateCart);


export default cartRouter;