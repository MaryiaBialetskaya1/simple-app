import express,  {Request,Response } from  'express'
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {

    let helloMessage = "Hello my dear Incubator!!! Missed you!"
    res.send(helloMessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})