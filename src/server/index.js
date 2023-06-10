////////////////////////////////////////////////////////////////////////////////////////////

/* Cargamos Modulo/Tools Express */
import express from 'express' 
import logger  from 'morgan' 
import cors    from 'cors'
import timeout from 'connect-timeout'

/*Cargamos Middleware */
import errorHandler from './middlewares/errorHandler.js'
import notfoundHandler from './middlewares/notfoundHandler.js'
import timeoutHandler from './middlewares/timeoutHandler.js'

/*Cargamos Rutas */
import  welcomeRoute from './routes/welcome.routes.js'
import  messagesRoute from  './routes/messages.routes.js'
      
////////////////////////////////////////////////////////////////////////////////////////////      

export default _ => {

  /*Init Server Express */
  const server = express()

        server.use( cors() )
        server.use( logger("dev") )
        server.use( express.json() )
        server.use( timeout('5s'), timeoutHandler )
        server.use('/',welcomeRoute)
        server.use('/messages',messagesRoute)
        server.use( notfoundHandler ) 
        server.use( errorHandler ) 

        return server

}

////////////////////////////////////////////////////////////////////////////////////////////