import { EXCEPTIONS } from '../Exceptions'

class ISODate {
    value: string
    constructor(isoDate: string) {
        isoDate = isoDate.trim()
        if (!isValidDate(isoDate)) throw Error(EXCEPTIONS.INVALID_DATE)
        this.value = isoDate
    }
    equals(another: ISODate) {
        return this.value === another.value
    }
}

const isValidDate = (value: string) => {
    const pattern =
        /^([1-9])([0-9]){3}-((0)([1-9])|(1)([0-2]))-((0)[1-9]|([1-2])[0-9]|(3)[0-1])$/g
    const matches = pattern.test(value)
    // Format allowed
    if (!matches) return false
    const dateComponents = value.split('-')
    const [yyyy, mm, dd] = dateComponents.map((c) => parseInt(c))
    // Leap-year validation
    if (mm == 2 && dd > 28 && yyyy % 4 != 0) return false
    return true
}

export { isValidDate }
export { ISODate }
