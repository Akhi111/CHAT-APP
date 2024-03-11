import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRout from "../middleware/protectRout.js";

const router = express.Router();

router.get("/:id", protectRout, getMessages);
router.post("/send/:id", protectRout, sendMessage);

export default router;
