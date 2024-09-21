const express = require("express");
const triggerTwillioCall = require("../controllers/twillio.controller");
const router = express.Router();

router.get("/call", async (req, res) => {
  const { toPhoneNumber } = req.query;

  const result = triggerTwillioCall(toPhoneNumber);

  return res.json({
    result,
  });
});

module.exports = router;
