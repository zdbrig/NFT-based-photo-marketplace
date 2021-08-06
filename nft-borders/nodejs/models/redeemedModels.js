const mongoose = require("mongoose");

const { Schema } = mongoose;

const redeemedSchema = new Schema({
    idRedeemed: String,
     name: String,
     address: String,
   // username: String,
    //lastname: String,
    //firstname: String,
   // photo: String,
  
});
const redeemeds = mongoose.model("redeemeds", redeemedSchema);
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
module.exports = redeemeds;
