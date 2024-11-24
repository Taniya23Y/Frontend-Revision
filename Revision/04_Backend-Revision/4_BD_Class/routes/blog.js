// import express in router
const express = require("express");
const router = express.Router();

// import blog controller
const { dummyLink } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
// const { updatePost } = require("../controllers/updatePost");
// const { deletePost } = require("../controllers/deletePost");

// Mapping || define API routes
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
// router.get("/getPost/:id", getPostById);
// router.put("/updatePost/:id", updatePost);
// router.delete("/deletePost/:id", deletePost);

// exports router
module.exports = router;
