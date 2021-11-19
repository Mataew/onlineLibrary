const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book"
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
})

const Review = mongoose.model("Review", reviewsSchema);

module.exports = Review;