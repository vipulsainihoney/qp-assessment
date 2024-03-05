import express from "express";
import * as adminController from "../controllers/adminController";

const router = express.Router();

// Add new grocery item
router.post("/grocery-items", adminController.addGroceryItem);

// View existing grocery items
router.get("/grocery-items", adminController.viewGroceryItems);

// Remove grocery item
router.delete("/grocery-items/:item_id", adminController.removeGroceryItem);

// Update details of existing grocery item
router.put("/grocery-items/:item_id", adminController.updateGroceryItem);

// Manage inventory of grocery item
router.put("/manage-inventory/:item_id", adminController.manageInventory);

// Add other admin-related routes as needed

export default router;
