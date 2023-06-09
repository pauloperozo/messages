/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default ( error, req, res, next ) => {

    console.log( `(Response Error Message ) : ${ error.message }` )
    return res.status( error.statusCode || 503 ).json( { message: error.statusCode ? error.message : 'Internal Error' } )
    
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////