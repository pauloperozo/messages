///////////////////////////////////////////////////////////
export default class HttpError extends Error {
    
    constructor( statusCode, message ) {
        super(message)
        this.statusCode = statusCode
        this.name = 'HttpError'
    }

}
///////////////////////////////////////////////////////////
