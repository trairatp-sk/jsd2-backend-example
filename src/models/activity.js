const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
  {
    title: { type: String, min: 5, max: 20, required: true },
    image: { type: String, min: 0, max: 10000, required: true },
    type: { type: String, enum: ['Running', 'Swimming', 'Hiking', 'Biking'], required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true }, // in second 600 = 10 min
    description: String,
  },
  {
    statics: {
      findByType: async function (type) {
        return this.find({ type });
      },
    },
  }
);

const ActivityModel = mongoose.model('activity', activitySchema);

module.exports = ActivityModel;
