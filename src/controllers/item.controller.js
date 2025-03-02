const { Item, User } = require("../models");
const itemSchema = require("../validations/itemValidation.js");


exports.createItem = async (req, res) => {
  try {
    // const { title, description } = req.body;
    const validatedData = itemSchema.parse(req.body);
    const user_id = req.user.id;

    const user = await User.findByPk(user_id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // const item = await Item.create({ user_id, title, description });
    const item = await Item.create({ ...validatedData, user_id });
    res
      .status(201)
      .json({ status: 200, message: "Item created successfully", item });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const user_id = req.user.id;
    const items = await Item.findAll({
      where: {user_id,user_id},
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ status: 400, message: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params; // Item ID from URL params
    const { title, description } = req.body;

    const item = await Item.findByPk(id);
    if (!item)
      return res.status(404).json({ status: 404, message: "Item not found" });

    // Optional: If you want to allow only the item owner to update it
    // if (req.user.id !== item.user_id) {
    //   return res.status(403).json({ status: 403, message: "Unauthorized to update this item" });
    // }

    // Update item details
    await item.update({ title, description });
    res.json({ status: 200, message: "Item updated successfully", item });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findByPk(id);
    if (!item)
      return res.status(404).json({ status: 404, message: "Item not found" });

    await item.destroy();
    res.status(200).json({ status: 200, message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};
