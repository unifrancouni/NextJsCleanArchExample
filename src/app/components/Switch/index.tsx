import React from 'react'
import { Col, Row, Input, Label, FormGroup } from 'reactstrap'

export default function Switch({
    name,
    label,
    state,
    toggle,
}: {
    name: string
    label: string
    state: boolean
    toggle: Function
}) {
    return (
        <>
            <Row className="mx-0 mt-2">
                <Col>
                    <Label> {label} </Label>
                </Col>
            </Row>
            <Row className="mx-0">
                <Col>
                    <FormGroup switch>
                        <Input
                            name={name}
                            type="switch"
                            checked={state}
                            onChange={() => toggle(!state)}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </>
    )
}
