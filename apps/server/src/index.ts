import express, { Application } from "express"

const app: Application = express()

const PORT = 8080

app.listen(PORT,() => {
    console.log("Sever is on")
})