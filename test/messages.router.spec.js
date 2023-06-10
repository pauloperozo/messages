/////////////////////////////////////////////////////////////
import  supertest  from 'supertest'
import  app  from '../src/server/index.js'
/////////////////////////////////////////////////////////////
const  request = supertest(app)
/////////////////////////////////////////////////////////////
describe("Servidor Activo",() => {

    describe("GET /messages", () =>{
        it("Succces", async () => {
            const response = await request.get("/messages").send()
            expect(response.status).toBe(200)
        })
    })

    describe("POST /messages", () =>{
        it("Succces", async () => {
            const response = await request.post("/messages").send( { chat_id:'5787321452',text:'Buenos Dias' } )
            expect(response.status).toBe(200)
        })
    })

})
/////////////////////////////////////////////////////////////