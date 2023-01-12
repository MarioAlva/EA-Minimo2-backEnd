import { Schema, model } from 'mongoose';

const Faqs = new Schema({
	Question: String,
    Answer: String,
    Likes: Number,
    Date: Date,
    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

export default model('Faqs', Faqs);

