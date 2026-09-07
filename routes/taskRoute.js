import express from "express";
const router = express.Router();

import taskController from "../controller/taskController.js";

router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
