////////////////////////////////////////////////////////////////////////////////
import telegramBot from '../app/provider/telegram.service.js'
import db from '../db/index.js' 
////////////////////////////////////////////////////////////////////////////////
class MessageService {

    constructor() { /* Class Template */}

    async pushMessage( chat_id, text )
    {
        const message = await db.Message.create( { chat_id,name:'BOT',text } )
        telegramBot.sendMessage(chat_id,text )
        return message
    }

    async getMessages()
    {
        const messages = await db.Message.findAll()
        return messages
    }

}

////////////////////////////////////////////////////////////////////////////////
export default new MessageService()
////////////////////////////////////////////////////////////////////////////////