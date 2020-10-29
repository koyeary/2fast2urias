const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const StatsSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId
      },
      date: {
        type: Date,
        default: Date.now
      },
      mood: {
        type: Number,
        required: true
      },
      energy: {
        type: Number,
        required: true
      },
      hoursSlept: {
        type: Number
      },
      interruptedSleep: {
        type: Number
      },
      socializing: {
        type: Number
      },
      creativity: {
        type: Boolean
      },
      meditation: {
        type: Boolean
      },
      sexualActivity: {
        type: Boolean
      },
      menstruating: {
        type: Boolean
      },
      meals: [
        {
          howMuch: {
            type: Number
          },
          howHealthy: {
            type: Number
          }
        }
      ],
      physicalActivity: [
        { 
          howMuch: {
            type: Number
          },
          howStrenuous: {
            type: Number
          }
        }
      ],
      stressOrAnxiety: {
          type: Boolean
      },
      conflict: {
          type: Boolean
      },
      Irritability: {
        type: Number
      },
      Substances: [
        { 
          yesOrNo: {
            type: Boolean
          },
          howStrenuous: {
            type: Number
          }
        }
      ],
      Notes: {
        type: String
      }
    });
    
    module.exports = mongoose.model('stats', StatsSchema);
    