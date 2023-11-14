import { Person } from '../domain/Person'
import { PersonCreator } from '../domain/service/person-creator.services'
import { PersonWriter } from '../domain/repository/person-writer.repositories'
import { EXCEPTIONS } from '@/shared/domain/Exceptions'

class PersonCreatorImpl implements PersonCreator {
    personWriter: PersonWriter
    constructor(personWriter: PersonWriter) {
        this.personWriter = personWriter
    }
    async createPerson(
        firstName: string,
        lastName: string,
        email: string,
        dateOfBirth: string,
        deceased: boolean
    ): Promise<Person> {
        const person: Person = new Person(
            firstName,
            lastName,
            email,
            dateOfBirth,
            deceased
        )
        const result: boolean = await this.personWriter.savePerson(person)
        if (!result) throw Error(EXCEPTIONS.REPOSITORY_ERROR)
        return person
    }
}

export { PersonCreatorImpl }
