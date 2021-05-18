const mongoose = require("mongoose");
const Review = require("./review");

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
