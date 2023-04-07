import { Schema, model } from "mongoose";

const StaffSchema =  new Schema({
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

export default model("Staff", StaffSchema);