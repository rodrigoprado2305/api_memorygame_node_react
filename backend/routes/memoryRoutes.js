const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/memoryController');

// Rota para salvar dados do jogo
router.post('/save', memoryController.saveGameData);

// Rota para recuperar histórico de resultados do jogo
router.get('/history/:userID', memoryController.getGameHistory);

module.exports = router;