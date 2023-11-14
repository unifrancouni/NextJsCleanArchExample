'use client'

import React, { useState } from 'react'
import { Button, Col, Row, Container } from 'reactstrap'
import TextInput from './components/TextInput'
import Switch from './components/Switch'
import { isValidEmail, isValidName } from '../utils/validations'
import { getState, getSetter } from '../utils/states'
import { personCreator } from '../dependency-container'

export default function Page() {
    /* SCHEMA */

    const FIELDS = {
        FIRST_NAME: {
            LABEL: 'First Name',
            VALIDATE: isValidName,
            NAME: 'firstName',
            STATE: useState(''),
        },
        LAST_NAME: {
            LABEL: 'Last Name',
            VALIDATE: isValidName,
            NAME: 'lastName',
            STATE: useState(''),
        },
        EMAIL: {
            LABEL: 'Email',
            VALIDATE: isValidEmail,
            NAME: 'email',
            STATE: useState(''),
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
            alert(JSON.stringify(resultPerson.toPrimitives()))
        } catch (e) {
            let errorMessage = 'UNKNOWN_ERROR'
            if (e instanceof Error) {
                errorMessage = e.message
            }
            alert(errorMessage)
        }
    }

    return (
        <Container className="mx-0 px-0">
            {/* Title */}
            <Row className="mx-0 mt-2">
                <Col className="col-3">
                    <h2>Create Person</h2>
                </Col>
            </Row>

            {/* First Name */}
            <TextInput
                name={FIELDS.FIRST_NAME.NAME}
                label={FIELDS.FIRST_NAME.LABEL}
                validate={FIELDS.FIRST_NAME.VALIDATE}
                setter={getSetter(FIELDS.FIRST_NAME.STATE)}
            />

            {/* Last Name */}
            <TextInput
                name={FIELDS.LAST_NAME.NAME}
                label={FIELDS.LAST_NAME.LABEL}
                validate={FIELDS.LAST_NAME.VALIDATE}
                setter={getSetter(FIELDS.LAST_NAME.STATE)}
            />

            {/* Email */}
            <TextInput
                name={FIELDS.EMAIL.NAME}
                label={FIELDS.EMAIL.LABEL}
                validate={FIELDS.EMAIL.VALIDATE}
                setter={getSetter(FIELDS.EMAIL.STATE)}
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
                    <Button onClick={createPersonHandler} color="success">
                        Create
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
