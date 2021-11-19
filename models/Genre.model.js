const mongoose = require ('mongoose')

const genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})


const Genre = mongoose.modol('Genre', genreSchema)

module.exports = Genre