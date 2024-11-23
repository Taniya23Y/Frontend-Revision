// import Todo model
const Todo = require("../models/Todo");

// define a route handler
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // create a new Todo object and insert in DB
    const todo = await Todo.findByIdAndDelete(id);

    // send a json response with  a success flag
    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo Deleted successfully",
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
