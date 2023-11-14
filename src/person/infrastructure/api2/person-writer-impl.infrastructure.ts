import { Person } from '../../domain/Person'
import { PersonWriter } from '../../domain/repository/person-writer.repositories'

class PersonWriterImpl implements PersonWriter {
    async savePerson(person: Person): Promise<boolean> {
        const { firstName, lastName, email, dateOfBirth, deceased } = person
        try {
            await fetch('/api/create2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    dateOfBirth,
                    deceased,
                }),
            })
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }
}

export { PersonWriterImpl }
