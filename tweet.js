const mongoose = require('mongoose'); //require mongoose

const Schema = mongoose.Schema; //creaye a shorthand for the mongoose Schema constructor

const tweetSchema = new Schema(
    {
        title: String,
        body: String,
        author: String,
        likes: {type: Number, default: 0},
        sponsored: {type: Boolean, default: false},
    },
    {timestamps:true}
)

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;