const express = require("express");
const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "adfasdfo14292",
      title: "First server side post",
      content: "This is post from the server side"
    },
    {
      id: "adfaajfo14222",
      title: "Second server side post",
      content: "This is the second post from the server side"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
