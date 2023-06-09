const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000
const swaggerUI = require("swagger-ui-express");
const swaggerJson = require("./openapi.json");
const PlayerController = require("../FSW-CH8/server/controllers/player.controller");


// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json()) 
app.use(errorHandler)

// swagger
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJson));

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)
app.get("/login", (req, res) => {
  res.send("ini login");
});


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})