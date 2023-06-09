////////////////////////////////////////////////////////////////////////////////////////////
import createServer from './server/index.js'
import telegramBot from './app/provider/telegram.service.js'
////////////////////////////////////////////////////////////////////////////////////////////
async function start() {

    try {
        
        const server = createServer()
        const port   = process.env.PORT || 5000

        /*Iniciamos La Base De Datos */
    
        
        /*Cargamos el escucha del bot */
        telegramBot.onMessage()    

        /*Iniciamos El Servidor */
        server.listen( port, _ => console.log(`Server is running in port: ${ port }`) )

    } 
    catch ( error ) {
        console.log( `Error Init Server: ${ error.message }` )
    }


}
////////////////////////////////////////////////////////////////////////////////////////////
export default { start }
////////////////////////////////////////////////////////////////////////////////////////////