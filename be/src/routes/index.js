import authRouter from "./auth.router";
import userRouter from "./users";
import Middlewares from "../middlewares";
import Controllers from "../controllers";
var express = require("express");
var router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.post(
  "/handle-questions",
  [Middlewares.Auth.isUser],
  Controllers.Survey.handleQuestions
);
router.get(
  "/answer",
  [Middlewares.Auth.isUser],
  Controllers.Survey.getAnswer
);
router.post(
  "/questions",
  Controllers.Survey.getQuestions
);

module.exports = router;
