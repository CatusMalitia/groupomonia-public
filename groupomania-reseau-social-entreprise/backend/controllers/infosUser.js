const User = require("../models/User");

exports.getInfosUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((infos) => res.status(200).json(infos))
    .catch((error) => res.status(404).json({ error }));
};

exports.getInfosAllUser = (req, res) => {
  User.find()
    .then((infos) => res.status(200).json(infos))
    .catch((error) => res.status(404).json({ error }));
};

exports.modifyInfosUserLandscape = (req, res) => {
  const userObject = req.file
    ? {
        ...JSON.parse(req.body.infosUser),
        imageUrlLandscapePicture: `${req.protocol}://${req.get(
          "host"
        )}/images/${req.file.filename}`,
      }
    : { ...JSON.parse(req.body.infosUser) };

  User.findOne({ _id: req.params.id })
    .then((user) => {
      if (user._id != req.auth.userId) {
        res.status(401).json({ message: "Non-autorisé" });
      } else {
        User.updateOne(
          { _id: req.params.id },
          { ...userObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Objet modifié !" }))
          .catch((error) => res.status(403).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
  console.log(userObject);
};

exports.modifyInfosUserProfile = (req, res) => {
  const userObject = req.file
    ? {
        ...JSON.parse(req.body.infosUser),
        imageUrlProfilePicture: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...JSON.parse(req.body.infosUser) };

  //delete userObject._id;
  User.findOne({ _id: req.params.id })
    .then((user) => {
      if (user._id != req.auth.userId) {
        res.status(401).json({ message: "Non-autorisé" });
      } else {
        User.updateOne(
          { _id: req.params.id },
          { ...userObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Objet modifié !" }))
          .catch((error) => res.status(403).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
  console.log(userObject);
};
