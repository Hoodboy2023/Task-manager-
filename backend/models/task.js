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
        default: true,
    },

    createdAt: {
        type: Date,
        default: Date.now 
    }, 

    category: {
       enum: ["Work", "Personal", "Hobby"] 
    }, 

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Provide user"]
    }

})