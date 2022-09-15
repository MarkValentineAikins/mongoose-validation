const router = require("express").Router;

const {createPost, 
    getAllPost, 
    deletePost, 
    getSingelPost, 
    updatePost
    } = require("./post.controller");

    const {authRequired} = require("../middlewares/authRequired");


//const {createPost, getAllPost} = require("./post.controller");


const postRouter = router();

postRouter.route("/").all(authRequired).get(getAllPost).post(createPost);


postRouter.route("/:postId").all(authRequired).get(getSingelPost).patch(updatePost).delete(deletePost);


module.exports = postRouter;



