const mongoose = require("mongoose");

// require models
const Post = require("../models/PostModel");

// post create
exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();

    res.json({
      post: savedPost,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      error: "Error While Creating Post",
    });
  }
};

// fetch all post
exports.fetchAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("comments").exec();

    res.json({
      posts,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      error: "Error While Fetching all Posts",
    });
  }
};
