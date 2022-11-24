const ToDo = require("../models/ToDo");
const addtodo = async (req,res) => {
    const {text} = req.body
    const todo = await ToDo.create({
        text:text,
        userid:req.user.userId
    })
    res.status(200).json({todo})
};
const gettodo = async (req, res) => {
  const todo = await ToDo.find({
    userid: req.user.userId,
  });
  res.status(200).json({ todo });
};
const deletetodo = async (req, res) => {
  const todo = await ToDo.findOneAndDelete({
    _id:req.params.id
  });
  res.status(200).json({ todo });
};
const donetodo = async (req, res) => {
  const todo = await ToDo.findOne({
    _id: req.params.id,
  });
  todo.tasktype = "done"
  await todo.save()
  res.status(200).json({ todo });
};
const undonetodo = async (req, res) => {
  const todo = await ToDo.findOne({
    _id: req.params.id,
  });
  todo.tasktype = "pending";
  await todo.save();
  res.status(200).json({ todo });
};
module.exports = {addtodo,gettodo,deletetodo,donetodo,undonetodo}