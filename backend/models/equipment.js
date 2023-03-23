import { Schema, model} from "mongoose";

const EquipmentSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        required: true,
    },
    available: {
        type: String,
        required: true,
    },
    qty: {
        type: String,
        required: true,
    },

});

export default model("equipment", EquipmentSchema);