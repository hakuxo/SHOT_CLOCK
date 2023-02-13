const router = require("express").Router();

const userRoutes = require("./userRoutes");
const versusRoutes = require("./versus");

router.use("/users", userRoutes);
router.use("/game", versusRoutes);

module.exports = router;
