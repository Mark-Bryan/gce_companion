import express from 'express';
import { register } from '../../src/handlers/auth/registration.js';
import { passwordReset } from '../../src/handlers/auth/passwordReset.js';
import { login } from '../../src/handlers/auth/login.js';

const router = express.Router();

// Registration route
router.post('/register', register);
router.post('/reset-password', passwordReset);
router.post('/login', login);
export default router;
