import {Schema, model ,models} from 'mongoose';

const postSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const Post = models.Post || model('Markdown', postSchema);

export default Post;