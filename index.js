const express = require("express");
const {dbConnect} = require("./Config/dbConnect");
const postRouter = require("./Modules/post/post.route");
//const {dbconnect} = require("./Config/dbconnect");

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{

})

app.use("/posts", postRouter);

async function start()

{
    await dbConnect();

    app.listen(4000, () => {
        console.log("server listening on https://localhost:4000");
    });
}
start();

