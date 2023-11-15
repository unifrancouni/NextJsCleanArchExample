'use client'

import React, { useState } from 'react'
import { Button, Col, Row, Container, Card } from 'reactstrap'
import TextInput from './components/TextInput'
import Switch from './components/Switch'
import { isValidEmail, isValidName } from '../utils/validations'
import { getState, getSetter } from '../utils/states'
import { personCreator } from '../dependency-container'
import { useRouter } from 'next/navigation'
import { persons } from '../utils/cache'

export default function Page() {
    /* SCHEMA */

    const FIELDS = {
        FIRST_NAME: {
            LABEL: 'First Name',
            VALIDATE: isValidName,
            NAME: 'firstName',
            STATE: useState(''),
            ERROR: 'The first name must must be valid. Example: John or John A.',
        },
        LAST_NAME: {
            LABEL: 'Last Name',
            VALIDATE: isValidName,
            NAME: 'lastName',
            STATE: useState(''),
            ERROR: 'The last name must be valid. Example: Doe or Doe W.',
        },
        EMAIL: {
            LABEL: 'Email',
            VALIDATE: isValidEmail,
            NAME: 'email',
            STATE: useState(''),
            ERROR: 'The email must be valid. Example: some@person.com',
        },
        DATE_OF_BIRTH: {
            LABEL: 'Date of Birth',
            NAME: 'dateOfBirth',
            STATE: useState(''),
            // Is Better to validate once before api call
        },
        DECEASED: {
            LABEL: 'Decesaded',
            NAME: 'deceased',
            STATE: useState(false),
        },
    }

    // Create Person Handler
    const createPersonHandler = async () => {
        // Form Data
        const { firstName, lastName, email, dateOfBirth, deceased } = {
            firstName: getState(FIELDS.FIRST_NAME.STATE),
            lastName: getState(FIELDS.LAST_NAME.STATE),
            email: getState(FIELDS.EMAIL.STATE),
            dateOfBirth: getState(FIELDS.DATE_OF_BIRTH.STATE),
            deceased: getState(FIELDS.DECEASED.STATE),
        }

        try {
            const resultPerson = await personCreator.createPerson(
                firstName,
                lastName,
                email,
                dateOfBirth,
                deceased
            )
            const plainPerson = resultPerson.toPrimitives()
            persons.push(plainPerson)
            alert('Created successfully!')
        } catch (e) {
            let errorMessage = 'UNKNOWN_ERROR'
            if (e instanceof Error) {
                errorMessage = e.message
            }
            alert(errorMessage)
        }
    }

    // Go to List
    const router = useRouter()
    const goToList = () => {
        router.push(`/list`)
    }

    return (
        <Container className="mx-0 px-0">
            <Row className="mt-3">
                <Col
                    md={{
                        offset: 3,
                        size: 6,
                    }}
                    sm="12"
                >
                    <Card body>
                        {/* Title */}
                        <Row className="mx-0 mt-2">
                            <Col>
                                <h2 className="text-center">Create Person</h2>
                            </Col>
                        </Row>

                        {/* First Name */}
                        <TextInput
                            name={FIELDS.FIRST_NAME.NAME}
                            label={FIELDS.FIRST_NAME.LABEL}
                            validate={FIELDS.FIRST_NAME.VALIDATE}
                            setter={getSetter(FIELDS.FIRST_NAME.STATE)}
                            errorMessage={FIELDS.FIRST_NAME.ERROR}
                        />

                        {/* Last Name */}
                        <TextInput
                            name={FIELDS.LAST_NAME.NAME}
                            label={FIELDS.LAST_NAME.LABEL}
                            validate={FIELDS.LAST_NAME.VALIDATE}
                            setter={getSetter(FIELDS.LAST_NAME.STATE)}
                            errorMessage={FIELDS.LAST_NAME.ERROR}
                        />

                        {/* Email */}
                        <TextInput
                            name={FIELDS.EMAIL.NAME}
                            label={FIELDS.EMAIL.LABEL}
                            validate={FIELDS.EMAIL.VALIDATE}
                            setter={getSetter(FIELDS.EMAIL.STATE)}
                            errorMessage={FIELDS.EMAIL.ERROR}
                        />

                        {/* Date Of Birth */}
                        <TextInput
                            name={FIELDS.DATE_OF_BIRTH.NAME}
                            label={FIELDS.DATE_OF_BIRTH.LABEL}
                            type="date"
                            setter={getSetter(FIELDS.DATE_OF_BIRTH.STATE)}
                        />

                        {/* Deceased */}
                        <Switch
                            name={FIELDS.DECEASED.NAME}
                            label={FIELDS.DECEASED.LABEL}
                            state={getState(FIELDS.DECEASED.STATE)}
                            toggle={getSetter(FIELDS.DECEASED.STATE)}
                        />

                        {/* Create */}
                        <Row className="mx-0 mt-2">
                            <Col>
                                <Button
                                    onClick={createPersonHandler}
                                    color="success"
                                >
                                    Create
                                </Button>
                            </Col>
                        </Row>

                        <Row className="mx-0 mt-2">
                            <Col>
                                <Button onClick={goToList} color="secondary">
                                    Go to List
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
