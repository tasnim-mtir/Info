import express from "express";
import { getOneUser, login, register } from "../controllers/user.js";
import { addblogs } from "../controllers/blogs.js";
 const router = express.Router();

//user
router.post('/Register', register);
router.post('/Login', login);
router.get('/user/:encrypted_id', getOneUser);
router.post('/blogs', addblogs);




 export default router;