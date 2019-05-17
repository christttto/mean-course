const express = require("express")

const app = express()

//'/posts' will now make it only handle this path
app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadf124211l",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "ksajflaj132",
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ]
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts
  })
  //no next, because there is no middleware after this
})

module.exports = app

//register path
