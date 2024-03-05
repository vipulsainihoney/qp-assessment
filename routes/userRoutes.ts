import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.get("/grocery-items", userController.viewGroceryItems);
router.post("/place-order", userController.placeOrder);

export default router;
