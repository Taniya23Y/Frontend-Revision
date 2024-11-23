// import Todo model
const Todo = require("../models/Todo");

// define a route handler
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // extract title and description from request body
    const { title, description } = req.body;

    // update a existing Todo object by id and insert in DB
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() }
    );

    // send a json response with  a success flag
    res.status(200).json({
      success: true,
      data: todo,
      message: "Update successfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
