import { Schema, model} from "mongoose";

const StudentSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
});

export default model("student", StudentSchema);