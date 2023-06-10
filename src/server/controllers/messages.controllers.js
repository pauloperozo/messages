///////////////////////////////////////////////////////////////////////////////////////////
import MessageService from '../../app/message.service.js'
import HttpError from './errorHandler.js'
///////////////////////////////////////////////////////////////////////////////////////////
const pushMessage = async ( req ,res ) => {

    /*Destructurin */
    const { body : { chat_id,text } } = req
    const { file } = req

    /*Validaciones de la ruta */
    if(!chat_id)throw new HttpError(400,'Require chat_id')
    if(!text )throw new HttpError(400,'Require text')

    /*Separamos los id en caso de multiples chats */
    let result = []
    for( let id of String( chat_id ).split(',') )
    {

        if( file )
        {
            /* Mensaje con imagen */
            const media_status = await MessageService.pushPhoto( id,file.buffer,text )
            result.push({chat_id: id,status:media_status})
        }
        else 
        {
            /*Mensaje Simple Con Texto */
            const single_status = await MessageService.pushMessage( id,text )
            result.push({chat_id: id,status:single_status})
        }
    }

    /*Respondemos  */
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