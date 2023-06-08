import express from 'express'; 
import { createUser, forgotPassword, login, updatePassword } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', login)
router.post('/signup', createUser);
router.post('/forgotPassword/:email', forgotPassword)
router.post('/updatePassword/:id', updatePassword);

export default router;