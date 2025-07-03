import express from 'express';
import { register } from '../../src/handlers/auth/registration.js';
import { passwordReset } from '../../src/handlers/auth/passwordReset.js';
import { login } from '../../src/handlers/auth/login.js';
import { createUser, getAllUsers } from '../../src/handlers/auth/users.js';
import { updateUser } from '../../src/handlers/auth/updateUser.js';
import { getUserById } from '../../src/handlers/auth/getUserByid.js';

const router = express.Router();

// Registration and authentication routes
router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', passwordReset);

// User management routes
router.get('/users', getAllUsers);
router.post('/createUser', createUser);
router.get('/users/:id', getUserById);
router.patch('/users/:id', updateUser);

export default router;
