/* This is a database connection function*/
import mongoose from 'mongoose'
import Person from '../models/Person'
const Schema = mongoose.Schema;

const connection = {} /* creating connection object*/

// const ProductSchema = new Schema({}, { strict: false });
// const Product = mongoose.model('PeopleOne', ProductSchema, 'people');

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    console.log("Connected already!")
    // let db = mongoose.connection.db;

    Person.find({}, function(err, arr) {
      console.log(arr)
    })

    return
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect