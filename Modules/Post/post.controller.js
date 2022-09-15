const Post = require("./post.model");

const veriifyAuthor = async (req, res)=> {
    let post = await Post.findById(req.params.postId);
    if (post._id.toString() !== user.req.id){
        return res.status(406).json({ error: 'Post not found' });
    }
}

 exports.getAllPost = async (req, res) => {
    console.log(req.user.id);
    console.log(req.user.email);

    const posts = await Post.find({});
    res.status(200).json({posts})
};
exports.getAllPostByUser = async (req, res) => {
    const posts = await Post.find({author: req.user.id});
    res.status(200).json({posts})
}

exports.createPost = async (req, res)=> {
    const {title, body, publish} = req.body;


    const post = await Post.create({
        title,
        body,
        author: req.user.id,

    });
    res.status(201).json({post});
};

exports.getSingelPost = async (req, res) =>{
    const post = await Post.findById(req.params.postId);

    res.status(200).json({post});
};

exports.updatePost = async (req, res) => {
    const {postId} = req.params;

   await veriifyAuthor();

 const post = await Post.findByIdAndUpdate(postId, {

        ...req.body}, {new:true}
        )

    res.status(200).json({post});
};

exports.deletePost = async (req, res) =>{
    await Post.findByIdAndDelete(req.params.postId);

    await veriifyAuthor();

    res.status(200).json({msg: "product successfully deleted"});
};