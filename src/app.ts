import express from "express"
import "./sandbox/service"
import itemsRouter from "./modules/items/items.module"

const app = express()

app.use(express.json())
app.use("/items",itemsRouter)

export default app;