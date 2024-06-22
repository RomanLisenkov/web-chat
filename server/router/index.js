const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");
const messageController = require("../controllers/message-controller");

router.post(
  "/registration",
  body("login").isLength({ min: 3, max: 32 }),
  body("password").isLength({ min: 8, max: 32 }),
  userController.registration,
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);
router.get("/messages", authMiddleware, messageController.getMessages);

module.exports = router;
