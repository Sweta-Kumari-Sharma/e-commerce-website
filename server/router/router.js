import express from 'express'
import { loginUser, signupUser } from '../controller/userController.js';
import { getProducts } from '../controller/productController.js';

const router =express.Router();

router.post('/signup',signupUser);
router.post('/login',loginUser);

router.get('/products',getProducts);

export default router