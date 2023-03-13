import { Schema, model } from "mongoose";

const EquipmentSchema = new Schema ({
    id : {
        type : String,
        required : true,
    }, 
    name : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true
    },
    qty : {
        type : Number,
        required : true,
    }
});

export default model("Equipment", EquipmentSchema);