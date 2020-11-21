// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect'
import Person from '../../models/Person';

export default async (req, res) => {
  // let result = await Person.findById('5fb8435f42d9b93a6bf6caaf');

  try {
    const pets = await Person.find({}) /* find all the data in our database */
    res.status(200).json({ success: true, data: pets })
  } catch (error) {
    res.status(400).json({ success: false })
  }

}
