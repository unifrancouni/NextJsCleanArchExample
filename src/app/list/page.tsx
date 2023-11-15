'use client'

import { persons } from '../../utils/cache'
import { useRouter } from 'next/navigation'
import { Badge, Button, Card, Col, Container, Row, Table } from 'reactstrap'

export default function List() {
    // Go Back
    const router = useRouter()
    const goBack = () => {
        router.back()
    }

    return (
        <Container className="mt-3 mx-3 px-0">
            <Card>
                <Row className="mx-0 mt-2">
                    <h1 className="text-center">Lista de Personas</h1>
                </Row>
                <Row className="mx-0 mt-2">
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Date of Birth</th>
                                <th>Deceased</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.map((person, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{person.firstName}</td>
                                        <td>{person.lastName}</td>
                                        <td>{person.email}</td>
                                        <td>{person.dateOfBirth}</td>
                                        <td>
                                            <Badge
                                                color={
                                                    person.deceased
                                                        ? 'danger'
                                                        : 'success'
                                                }
                                                pill
                                            >
                                                {person.deceased ? 'Sí' : 'No'}
                                            </Badge>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
                <Row className="mx-0 mt-2 mb-3">
                    <Col>
                        <Button onClick={goBack} color="secondary">
                            Go Back
                        </Button>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}
