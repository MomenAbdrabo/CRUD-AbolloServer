import express from 'express'
import { initApp } from './SRC/app.js'
import { server } from './apolloServer.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

initApp(app)
async function startServer() {
    await server.start();

    server.applyMiddleware({ app });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
startServer()