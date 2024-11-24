const mongoose = require("mongoose");

// require models
const Post = require("../models/PostModel");
const Like = require("../models/likeModel");

// like
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    // update the post collection basis on this
    const updatePost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: savedLike._id },
      },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatePost,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      error: "Error While Liking Post",
    });
  }
};

// unlike
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // find and delete the post on basis of id
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    // update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { likes: deletedLike._id },
      },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      error: "Error While UnLiking Post",
    });
  }
};

exports.dummyLink = (req, res) => {
  res.send("This is your Dummy Page");
};
