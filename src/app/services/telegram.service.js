import TelegramBot from 'node-telegram-bot-api'
///////////////////////////////////////////////////////////////////////////////////////////
class telegramService {

    //////////////////////////////////////////////////////////////////////////////////////
    constructor() { 

        this.token = process.env.TELEGRAM_TOKEN || ''
        this.bot = new TelegramBot( this.token, { polling: true } )
        
    }
    //////////////////////////////////////////////////////////////////////////////////////
    pushMessage ( chat_id, msj ){

        this.bot.sendMessage( chat_id , msj )
    }
    //////////////////////////////////////////////////////////////////////////////////////
    onMessage () {

        this.bot.on('message', ( msg ) => {

            console.log( msg )
        
        })
    }
    //////////////////////////////////////////////////////////////////////////////////////

}
///////////////////////////////////////////////////////////////////////////////////////////
export default new telegramService()
///////////////////////////////////////////////////////////////////////////////////////////