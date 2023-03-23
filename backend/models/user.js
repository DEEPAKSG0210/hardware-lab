import { Schema, model } from "mongoose";

const UserSchema =  new Schema({
    userId: {
        type: String,
        reruired: true,
    },
    password: {
        type: String,
        required: true,
    }
});

export default model("user", UserSchema);