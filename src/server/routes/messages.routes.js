//////////////////////////////////////////////////////////////////////////////////////////
import multer from  'multer'
import { Router } from 'express' 
import messagesControllers from '../controllers/messages.controllers.js'
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
//////////////////////////////////////////////////////////////////////////////////////////

    /* Definicion de las rutas a usar*/
    const router = Router()
    router.get('/',messagesControllers.getAllMessages )
    router.post('/',upload.single('image'),messagesControllers.pushMessage )

//////////////////////////////////////////////////////////////////////////////////////////
export default router
//////////////////////////////////////////////////////////////////////////////////////////