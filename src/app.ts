import express from "express"
import "./sandbox/service"

const app = express()

app.use(express.json())

export default app;