const router = require("express").Router;

const {createPost, 
    getAllPost, 
    deletePost, 
    getSingelPost, 
    updatePost
    } = require("./post.controller");

//const {createPost, getAllPost} = require("./post.controller");


const postRouter = router();

postRouter.route("/").get(getAllPost).post(createPost);
postRouter.route("/:postId").get(getSingelPost).patch(updatePost).delete(deletePost);


module.exports = postRouter;



