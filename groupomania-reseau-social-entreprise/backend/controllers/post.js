const Post = require("../models/Post");

exports.createPost = (req, res) => {
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrlPostPicture: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body.post };
  const post = new Post({
    ...postObject,
  });
  post
    .save()
    .then(() => {
      res.status(201).json({ message: "Objet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getAllPosts = (req, res) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};
