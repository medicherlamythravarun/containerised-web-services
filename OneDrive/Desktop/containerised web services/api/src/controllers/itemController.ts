import { Request, Response } from 'express';
import Item from '../models/Item';

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(updatedItem);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
