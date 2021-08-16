const mongoose = require("mongoose");

const { Schema } = mongoose;

const userInfoSchema = new Schema({
    // id: String,
    // name: String,
    publicKey: String,
    username: String,
    email: String,
    lastname: String,
    firstname: String,
    photo: String,
});
const usersInfo = mongoose.model("usersInfo", userInfoSchema);
// const UserModel = mongoose.model(
//     "nft",
//     {
//         publickey: {
//             type: String,
//             required: true,
//         },
//         username: {
//             type: String,
//         },
//         lastname: {
//             type: String,
//         },
//         firstname: {
//             type: String,
//         },

//         photo: {
//             type: String,
//         },
//     },
//     "users"
// );
module.exports = usersInfo;