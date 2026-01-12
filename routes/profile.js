const express = require("express");
const { authMiddleware } = require("../middleware/auth");
const { users } = require("../data/store");

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({
    id: user.id,
    name: user.name,
    email: user.email
  });
});

module.exports = router;
