const { z } = require("zod");

const userSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1, "Name must be at least 3 characters"),
  email: z.string({ required_error: "Email is required" }).email("Invalid email format"),
  password: z.string({ required_error: "Password is required" }).min(1, "Password must be at least 6 characters"),
});

module.exports = userSchema;
