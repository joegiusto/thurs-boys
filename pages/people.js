import Link from 'next/link'
import dbConnect from '../utils/dbConnect'
import Person from '../models/Person'

const People = ({ pets }) => (
  <>
  <h1>People</h1>
    {/* Create a card for each pet */}
    {pets.map((pet) => (
      <div key={pet._id}>
        <div className="card">
          <img src={pet.image_url} />
          <h5 className="pet-name">{pet.first_name} {pet.last_name}</h5>
          <div className="main-content">
            <p className="owner">Owner: {pet.owner_name}</p>

            {/* <div className="btn-container">
              <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${pet._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div> */}

          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Person.find({})

  console.log("Result")
  console.log(result)

  const people = result.map((doc) => {
    const pet = doc.toObject()
    pet._id = pet._id.toString()
    return pet
  })

  return { props: { pets: people } }
}

export default People