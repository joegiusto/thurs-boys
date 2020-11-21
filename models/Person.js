import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const PersonSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  last_name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  discord_id: {
    type: String,
  },

})

export default mongoose.models.Person || mongoose.model('Person', PersonSchema, 'persons')