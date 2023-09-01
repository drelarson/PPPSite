const mongoose = require('mongoose');
require('dotenv').config()

const ProjectSchema = new mongoose.Schema({
    projectName:{
        type: String,
        required: true
    }, 
    projectLocation:{
        type: String
    },
    projectStart:{
        type:Date,
        default:Date.now
    },
    projectedCompleteDate:{
        type:Date,
      
    },
    budget:{
        type:Number
    },
    actualCost:{
        type:Number
    },
    actualCompletedDate:{
        date:Date,
        completedBy:String
    },
    milestones:[{
        milestoneName:String,
        milestoneVendor:String,
        milestoneBudget:Number,
        milestoneActualCost:Number,
        notes:[{
            note: String,
            user:String,
            image:String,
            dateAdded:Date,
        }],
        completedDate: Date,
        completedBy:String,


    }],
    taskList:{
        type:[String]
    },

    projectImages:{
        type: [String],
   
    },
    projectOwner:{
        type:String
    },
    projectHelpers:{
        type:[String]
    },
    commentSection:[{
        comment:String,
        userName:String,
        userImage:String,
        commentDate:{
            type:Date,
            default:Date.now
        }
    }],

},
{
    timestamps: true,
  }
);

module.exports = Project = mongoose.model('project', ProjectSchema);