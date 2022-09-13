const Post = require("./post.model");

 exports.getAllPost = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json({posts})
};

exports.createPost = async (req, res)=> {
    const {title, body, publish} = req.body;


    const post = await Post.create({
        title,
        body,
        publish,

    });
    res.status(201).json({post});
};

exports.getSingelPost = async (req, res) =>{
    const post = await Post.findById(req.params.postId);
    res.status(200).json({post});
};

exports.updatePost = async (req, res) => {
    const {postId} = req.params;

    const post = await Post.findByIdAndUpdate(postId, {

        ...req.body}, {new:true}
        )
    res.status(200).json({post});
};

exports.deletePost = async (req, res) =>{
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json({msg: "product successfully deleted"});
};