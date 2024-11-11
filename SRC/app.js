
import express from "express"
import { dataBase } from "./config/index.js"

export const initApp = (app) => {

    app.use(express.json({}))
    dataBase()
} 