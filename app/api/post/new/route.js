import { connectDB } from "@/config/connectDB";
import Post from "@/model/markdown";

export const POST = async(req) => {
    const { title, content } = req.body;

    try {
        await connectDB();
        const newPost = await Post.create({
            creator: req.user._id,
            title,
            content
        })

        await newPost.save();
        return new Response("Post created", newPost, 200);
    } catch (error) {
        return new Response(error.message, null, 500);
    }
}