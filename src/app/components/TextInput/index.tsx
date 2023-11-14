import React, { useState } from 'react'
import { Col, Row, Input, Label } from 'reactstrap'
import { InputType } from '../../../utils/types'

export default function TextInput({
    name,
    label,
    setter,
    type = 'text',
    validate,
}: {
    name: string
    label: string
    setter: Function
    type?: InputType
    validate?: Function
}) {
    const [isValidState, setIsValidState] = useState(true)

    const setStateHandler = (inputValue: string) => {
        const result = isValid(inputValue)
        if (result) {
            setter(inputValue)
        } else setter('')
    }

    const isValid = (value: string): boolean => {
        if (validate !== undefined) {
            const result = validate(value)
            setIsValidState(result)
            return result
        }
        return true
    }

    return (
        <>
            {/* Label */}
            <Row className="mx-0 mt-2">
                <Col className="col-3">
                    <Label>{label}</Label>
                </Col>
            </Row>

            {/* Input */}
            <Row className="mx-0 mt-0">
                <Col className="col-3">
                    <Input
                        name={name}
                        type={type}
                        onChange={(evt) => setStateHandler(evt.target.value)}
                        invalid={!isValidState}
                    ></Input>
                </Col>
            </Row>
        </>
    )
}
