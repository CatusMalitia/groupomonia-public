const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const userCtrl = require("../controllers/user");
const infosUserCtrl = require("../controllers/infosUser");
const infosPostCtrl = require("../controllers/post");
const likesCtrl = require("../controllers/likes");

//Routes utilisateurs
router.post("/api/authentification/signup", userCtrl.signup);
router.post("/api/authentification/signin", userCtrl.signin);

router.get("/api/ficheUser/:id", auth, infosUserCtrl.getInfosUser);
router.get("/api/ficheUser/", auth, infosUserCtrl.getInfosAllUser);
router.put("/api/ficheUser/landscape/:id", auth, multer, infosUserCtrl.modifyInfosUserLandscape);
router.put("/api/ficheUser/profile/:id", auth, multer, infosUserCtrl.modifyInfosUserProfile);

//Routes Posts
router.get("/api/ficheUser/post/:id", auth, infosPostCtrl.getAllPosts);
router.post("/api/ficheUser/post/", auth, multer, infosPostCtrl.createPost);
router.post("/api/ficheUser/post/like/:id", auth, likesCtrl.like); 

module.exports = router;
