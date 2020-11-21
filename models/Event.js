import mongoose from 'mongoose'
// import Person from '../models/Person'

/* PetSchema will correspond to a collection in your MongoDB database. */
const WeekSchema = new mongoose.Schema({

  eventDate: {
    type: Date,
    required: [true, 'Please provide a date and time for this event.'],
    // maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  votingStart: {
    type: Date,
    required: [true, 'Please provide a date and time for event voting to start.'],
    // maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  votingEnd: {
    type: Date,
    required: [true, 'Please provide a date and time for event voting to end.'],
    // maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  votes: {
    type: Array,
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Person'
  },

})

export default mongoose.models.Week || mongoose.model('Week', WeekSchema, 'weeks')