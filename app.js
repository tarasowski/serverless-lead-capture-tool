const parse = require('./parse')
const db = require('./adapter')
const processResponse = require('./process-response')
const IS_CORS = process.env.IS_CORS

exports.handler = async(event) => {
    if (event.httpMethod === 'OPTIONS') {
        return Promise.resolve(processResponse(IS_CORS));
    }

    const body = parse(event)

    return db.putItem(body)
        .then(response => (processResponse(IS_CORS, response.Items)))
        .catch(err => {
            console.log(err);
            return processResponse(IS_CORS, 'dynamo-error', 500);
        })

}
