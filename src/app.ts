import express from "express";
import menuRouter from "./modules/menu/menu.route"
import MenuItemRouter from "./modules/menuItem/menuItem.route"


const app = express()


app.use(express.json())

app.use("/api/menu",menuRouter)
app.use("/api/menuitem",MenuItemRouter)




export default app
