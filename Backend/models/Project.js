const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    creatorUserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });

  module.exports = mongoose.model('Project', ProjectSchema);