import express from 'express';
import { registerUser } from '../controllers/UserController.js';

const router = express.Router();

router.post('/register',registerUser)

router.post('/login',(req,res)=>{
    
})

export default router;