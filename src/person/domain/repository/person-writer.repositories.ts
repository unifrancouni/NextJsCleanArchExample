import { Person } from '../Person'

interface PersonWriter {
    savePerson(person: Person): Promise<boolean>
}

export type { PersonWriter }
