const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  //_id: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  imageUrlPostPicture: { type: String },
  postContent: { type: String, required: true },
  userId: { type: String },
  likes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  identification: { type: String },
});

module.exports = mongoose.model("post", postSchema);
