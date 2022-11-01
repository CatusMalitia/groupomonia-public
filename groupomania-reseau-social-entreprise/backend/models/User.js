const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bioProfile: { type: String },
  city: { type: String },
  imageUrlProfilePicture: { type: String },
  imageUrlLandscapePicture: { type: String },
  admin: { type: Boolean, default: false },
  //entryDate: { type: Date, default: Date.now}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("user", userSchema);
