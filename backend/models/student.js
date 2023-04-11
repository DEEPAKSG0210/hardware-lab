import { Schema, model } from "mongoose";

const StudentSchema =  new Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    borrow: {
        type: [Array]
    }
    
});

export default model("student", StudentSchema);