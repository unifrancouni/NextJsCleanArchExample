import { Person } from '../Person'

interface PersonCreator {
    createPerson(
        firstName: string,
        lastName: string,
        email: string,
        dateOfBirth: string,
        deceased: boolean
    ): Promise<Person>
}

export type { PersonCreator }
