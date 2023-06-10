///////////////////////////////////////////////////////////////////////////////////////////
import MessageService from '../../app/message.service.js'
import HttpError from './errorHandler.js'
///////////////////////////////////////////////////////////////////////////////////////////
const pushMessage = async ( req ,res ) => {

    /*Destructurin */
    const { body : { chat_id,text } } = req

    /*Validaciones de la ruta */
    if(!chat_id)throw new HttpError(400,'Require chat_id')
    if(!text )throw new HttpError(400,'Require text')

    /*Separamos los id en caso de multiples chats */
    let result = []
    String( chat_id ).split(',').forEach( async ( id  ) => {

        /*Enviamos los mensages */
        const status = await MessageService.pushMessage( chat_id,text )
        result.pus({chat_id: id,status})

    })

    res.json( { messages: result } )

}
///////////////////////////////////////////////////////////////////////////////////////////
const getAllMessages =  async ( req ,res ) => {

    /*Destructurin */
    const { query : { chat_id,name,text } } = req

    /*Ohtener todos los mensages  */
    let result = await MessageService.getMessages()

    /*Filtros por params */
    if( chat_id ) result = result.filter( row => row.chat_id == chat_id )
    if( name ) result = result.filter( row => row.chat_id == chat_id )
    if( text ) result = result.filter( row => row.chat_id == chat_id )

    /*Resultado final despues de los filtros */
    res.json( result )

}
///////////////////////////////////////////////////////////////////////////////////////////
export default { pushMessage, getAllMessages  }
///////////////////////////////////////////////////////////////////////////////////////////