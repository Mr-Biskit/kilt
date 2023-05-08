import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
