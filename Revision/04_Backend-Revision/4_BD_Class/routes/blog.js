// import express in router
const express = require("express");
const router = express.Router();

// import blog controller
const {
  dummyLink,
  likePost,
  unlikePost,
} = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost, fetchAllPosts } = require("../controllers/postController");

// Mapping || define API routes
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", fetchAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
// router.delete("/deletePost/:id", deletePost);

// exports router
module.exports = router;
