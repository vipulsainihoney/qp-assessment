import { Request, Response } from "express";
import { GroceryItem } from "../models/GroceryItem";

export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const newItem = req.body;
    const createdItem = await GroceryItem.create(newItem);
    res.json({
      status: "success",
      message: "Grocery item added successfully",
      data: createdItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export const viewGroceryItems = async (req: Request, res: Response) => {
  try {
    const items = await GroceryItem.findAll();
    res.json({ status: "success", data: items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export const removeGroceryItem = async (req: Request, res: Response) => {
  try {
    const itemId = parseInt(req.params.item_id, 10);
    await GroceryItem.destroy({ where: { id: itemId } });
    res.json({
      status: "success",
      message: "Grocery item removed successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
  try {
    const itemId = parseInt(req.params.item_id, 10);
    const updatedItem = req.body;

    const existingItem = await GroceryItem.findByPk(itemId);
    if (!existingItem) {
      return res
        .status(404)
        .json({ status: "error", message: "Grocery item not found" });
    }

    await existingItem.update(updatedItem);

    res.json({
      status: "success",
      message: "Grocery item updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export const manageInventory = async (req: Request, res: Response) => {
  try {
    const itemId = parseInt(req.params.item_id, 10);
    const { quantity } = req.body;

    const existingItem = await GroceryItem.findByPk(itemId);
    if (!existingItem) {
      return res
        .status(404)
        .json({ status: "error", message: "Grocery item not found" });
    }

    await existingItem.update({ quantity });

    res.json({ status: "success", message: "Inventory updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};
