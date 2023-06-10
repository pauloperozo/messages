////////////////////////////////////////////////////////////////////////////////
import telegramBot from '../app/provider/telegram.service.js'
import db from '../db/index.js' 
////////////////////////////////////////////////////////////////////////////////
class MessageService {

    constructor() { /* Class Template */ }

    async pushMessage( chat_id, text )
    {
        /*Envio De mensage y guardado */
        const send = await telegramBot.sendMessage(chat_id,text ) 
        if( send ) await db.Message.create( { chat_id,name:'BOT',text } )
        return send
    }

    async getMessages()
    {
        /*Consulta De Los Mensages */
        const messages = await db.Message.findAll()
        return messages
    }

}

////////////////////////////////////////////////////////////////////////////////
export default new MessageService()
////////////////////////////////////////////////////////////////////////////////