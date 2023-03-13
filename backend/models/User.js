import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    id : {  
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
    },

});

export default model('User', UserSchema);