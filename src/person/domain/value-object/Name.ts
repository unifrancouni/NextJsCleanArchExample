import { EXCEPTIONS } from '@/shared/domain/Exceptions'

class Name {
    value: string
    constructor(name: string) {
        name = name.trim()
        const isValid = isValidName(name)
        if (!isValid) throw new Error(EXCEPTIONS.INVALID_NAME)
        this.value = name
    }
    equals(another: Name) {
        return this.value === another.value
    }
}

const isValidName = (value: string): boolean => {
    const pattern = /^([A-Za-z.]{2,})( ([A-Za-z.]{1,}))?$/g
    const result =
        pattern.test(value) && value.length > 0 && value.length <= 200
    return result
}

export { isValidName }
export { Name }
