const { z } = require("zod");

const itemSchema = z.object({
  title: z.string({ required_error: "Title is required" }).min(1, "Title must be at least 3 characters"),
  description: z.string({ required_error: "Description is required" }).min(1, "Description must be at least 5 characters"),
});

module.exports = itemSchema;
