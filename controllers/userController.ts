import { Request, Response } from "express";
import { GroceryItem } from "../models/GroceryItem";

export const viewGroceryItems = async (req: Request, res: Response) => {
  try {
    const items = await GroceryItem.findAll();
    res.json({ status: "success", data: items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const orderItems = req.body.items;
    // Implement logic to process the order, update inventory, etc.

    res.json({ status: "success", message: "Order placed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};
