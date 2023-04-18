const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();


/**
 * @Routes "/api/v1/players"
 */

playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);
playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);
playerRouter.post("/exp/:id", PlayerController.updateExperience);
playerRouter.get("/login", (req, res) => {
    res.send("ini login");
});

module.exports = playerRouter;
