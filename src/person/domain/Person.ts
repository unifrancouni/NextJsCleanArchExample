import { Name } from './value-object/Name'
import { Email } from '../../shared/domain/value-object/Email'
import { DateOfBirth } from '../../shared/domain/value-object/DateOfBirth'

class Person {
    firstName: Name
    lastName: Name
    email: Email
    dateOfBirth: DateOfBirth
    deceased: boolean

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        dateOfBirth: string,
        deceased: boolean
    ) {
        this.firstName = new Name(firstName)
        this.lastName = new Name(lastName)
        this.email = new Email(email)
        this.dateOfBirth = new DateOfBirth(dateOfBirth)
        this.deceased = deceased
    }

    toPrimitives() {
        return {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            dateOfBirth: this.dateOfBirth.value.value,
            deceased: this.deceased,
        }
    }
}

export { Person }
