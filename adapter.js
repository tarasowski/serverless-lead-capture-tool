const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

const TABLE_NAME = process.env.TABLE_NAME || 'serverless-lead-capture-tool-WebsiteLeadCapture-LWTQU7ISFVS7'

module.exports.putItem = (body) => {

    const params = {
        TableName: TABLE_NAME,
        Item: {
            companyId: {
                "S": body.companyId
            },
            date: {
                "S": String(body.date)
            },
            name: {
                "S": body.name
            },
            phone: {
                "N": String(body.phone)
            },
            email: {
                "S": body.email
            },
            message: {
                "S": body.message
            }
        }
    }

    return dynamodb.putItem(params).promise()
}
