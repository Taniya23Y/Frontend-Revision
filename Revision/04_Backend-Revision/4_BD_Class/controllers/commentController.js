const mongoose = require("mongoose");
// model define
const Post = require("../models/PostModel");
const Comment = require("../models/commentModel");

// define a route handler || business logic
exports.createComment = async (req, res) => {
  try {
    // extract || fetch from request body
    const { post, user, body } = req.body;

    // create a Comment object
    const comment = new Comment({ post, user, body });

    // save a new Comment object and insert in DB
    const savedComment = await comment.save();

    // find post by ID, add the new comment to its comments array
    // here push -> add a new entry
    // here pull -> delete a new entry
    // { new: true } // jabh yeh sara kaam hone ke baad,jo updated document hoga vo return hoga
    // .populate("comments") // abhi hamare pass ess comments ki ids hai, let says koi actual id ka document chahta ho to populate ke through le sakta hai
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    // send a json response with  a success flag
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error While Creating Comment",
    });
  }
};

// exports.createComment = async (req, res) => {
//   try {
//     const { post, user, body } = req.body;

//     if (!post || !user || !body) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     if (!mongoose.Types.ObjectId.isValid(post)) {
//       return res.status(400).json({ error: "Invalid Post ID" });
//     }

//     const comment = new Comment({ post, user, body });
//     const savedComment = await comment.save();

//     const updatedPost = await Post.findByIdAndUpdate(
//       post,
//       { $push: { comments: savedComment._id } },
//       { new: true }
//     )
//       .populate("comments")
//       .exec();

//     res.status(201).json({
//       message: "Comment created successfully",
//       post: updatedPost,
//     });
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({
//       error: "Error While Creating Comment",
//     });
//   }
// };
