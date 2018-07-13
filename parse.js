module.exports = (event) => {
    if (!event) {
        return ''
    }

    const companyId = event.pathParameters.companyId
    const body = JSON.parse(event.body)
    const name = body.name
    const phone = body.phone
    const email = body.email
    const message = body.message
    const date = body.date

    return {
        companyId,
        name,
        phone,
        email,
        message,
        date
    }
}
