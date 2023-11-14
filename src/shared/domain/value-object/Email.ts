import { EXCEPTIONS } from '../Exceptions'

class Email {
    value: string
    constructor(email: string) {
        email = email.trim()
        const isValid = isValidEmail(email)
        if (!isValid) throw Error(EXCEPTIONS.INVALID_EMAIL)
        this.value = email
    }
    equals(another: Email) {
        return this.value === another.value
    }
}

const isValidEmail = (value: string): boolean => {
    const pattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
    const result = pattern.test(value) && value.length > 0
    return result
}

export { isValidEmail }
export { Email }
