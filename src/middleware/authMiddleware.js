const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const authHeader = req.header("Authorization"); // Get token from headers

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  // Extract token by removing "Bearer " prefix
  const token = authHeader.split(" ")[1].replace(/"/g, ""); // Remove extra quotes

  try {
    const decoded = jwt.verify(token, "abhishek"); // Replace "abhishek" with process.env.JWT_SECRET
    req.user = decoded; // Attach decoded user data to request object
    next(); // Proceed to next middleware/controller
  } catch (error) {
    console.error("JWT Verification Error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};
