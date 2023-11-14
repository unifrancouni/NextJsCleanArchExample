import { EXCEPTIONS } from '../Exceptions'
import { ISODate } from './ISODate'

class DateOfBirth {
    value: ISODate
    constructor(dateOfBirth: string) {
        dateOfBirth = dateOfBirth.trim()
        const newDateOfBirth = new ISODate(dateOfBirth)
        if (!isValidDateOfBirth(newDateOfBirth))
            throw Error(EXCEPTIONS.INVALID_DATE_OF_BIRTH)
        this.value = newDateOfBirth
    }
    equals(another: DateOfBirth) {
        return this.value === another.value
    }
}

const isValidDateOfBirth = (value: ISODate) => {
    const [valueDate, now] = [new Date(value.value), new Date()]
    // Past date validation (Non-future dates)
    if (valueDate >= now) return false
    return true
}

export { isValidDateOfBirth }
export { DateOfBirth }
