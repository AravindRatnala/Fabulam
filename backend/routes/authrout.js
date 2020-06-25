const express = require("express");
const { body } = require("express-validator");
const User = require("../models/user");
const router = express.Router();
const authControler = require("../controller/authcontroler");

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Enter valid e mail")
      .custom((email) => {
        return User.findOne({ email: email }).then((Userdoc) => {
          if (Userdoc) {
            return Promise.reject("E-mail alredy exists");
          }
        });
      }),
    body("password").trim().isLength({ min: 5 }),
    body("name").trim().not().isEmpty(),
  ],
  authControler.signup
);

router.post("/login", authController.login);

module.exports = router;
