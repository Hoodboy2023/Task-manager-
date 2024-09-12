const mongoose =  require("mongoose")

const taskSchema =  new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Please provide title"],
        trim: true,
        maxlength: 50,  
    },

    description: {
       type: String,
       trim: true,
    },

    completed: {
        type: Boolean,
        required: true,
        default: false,
    },

    createdAt: {
        type: Date,
        default: Date.now 
    }, 

    category: {
        type: String,
        required: true,
        enum: {
            values: ["work", "personal", "hobby"],
            message: "{VALUE} is not valid"
    }
    }, 

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Provide user"]
    }

})

module.exports = mongoose.model("tasks", taskSchema)