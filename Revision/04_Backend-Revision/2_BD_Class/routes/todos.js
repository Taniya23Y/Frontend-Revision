// import express in router
const express = require("express");
const router = express.Router();

// import todo controller
const { createTodo } = require("../controllers/createTodo");

// define API routes
router.post("/createTodo", createTodo);

module.exports = router;
