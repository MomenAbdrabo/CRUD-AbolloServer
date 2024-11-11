import { Schema } from "mongoose";

export const postSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: String

}, { timestamps: true })

