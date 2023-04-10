import { Schema, model} from "mongoose";

const BorrowSchema = new Schema({
    student_name: {
        type: String,
        required: true
    },
    student_id: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nfc_no: {
        type: String,
        required: true,
    },
    available: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },

});

export default model("borrow", BorrowSchema);