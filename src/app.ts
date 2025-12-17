import express from "express";
import menuRouter from "./modules/menu/menu.route"


const app = express()


app.use(express.json())

app.use("/api/menu",menuRouter)




export default app
