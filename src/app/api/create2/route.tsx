export async function POST(request: Request) {
    const { firstName, lastName, email, dateOfBirth, deceased } =
        await request.json()

    try {
        const marca = 'API2'
        const newPerson = {
            marca,
            firstName,
            lastName,
            email,
            dateOfBirth,
            deceased,
        }
        return Response.json({ status: 200, data: newPerson })
    } catch (e) {
        console.log(e)
        return new Response(JSON.stringify(e), {
            status: 400,
            statusText: 'BAD_REQUEST',
        })
    }
}
