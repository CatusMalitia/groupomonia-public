const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        // userIdentification: "",
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        password: hash,
        bioProfile: "",
        city: "",
        imageUrlProfilePicture: "",
        imageUrlLandscapePicture: "",
        admin: false,
      });
      user.save().then(() =>
        res.status(201).json({
          userId: user._id,
          token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "8h",
          }),
        })
      );
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.signin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Votre email ou mot de passe est incorrect" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Votre email ou mot de passe est incorrect" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "8h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
