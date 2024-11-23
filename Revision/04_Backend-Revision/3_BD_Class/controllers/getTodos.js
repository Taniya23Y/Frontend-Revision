// import Todo model
const Todo = require("../models/Todo");

// define a route handler
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items form database
    const todos = await Todo.find({});

    // send a json response with  a success flag
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire data is fetched",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Failed",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // extract todo items basics on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data found with Given Id",
      });
    }
    // data for given Id
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Failed",
    });
  }
};
