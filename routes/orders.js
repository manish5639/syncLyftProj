const express = require("express");
const { body, validationResult } = require("express-validator");
const { authMiddleware } = require("../middleware/auth");
const { orders } = require("../data/store");

const router = express.Router();


router.post(
  "/order",
  authMiddleware,
  body("product_name").notEmpty(),
  body("quantity").isInt({ min: 1 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { product_name, quantity } = req.body;

    const order = {
      id: orders.length + 1,
      userId: req.user.id,
      product_name,
      quantity
    };

    orders.push(order);
    res.status(201).json(order);
  }
);
 

router.get("/orders", authMiddleware, (req, res) => {
  const userOrders = orders.filter(o => o.userId === req.user.id);
  res.json(userOrders);
});

module.exports = router;
