const Save = require('../models/save');

exports.saveGameData = async (req, res) => {
    const { userID, gameDate, failed, difficulty, completed, timeTaken } = req.body;

    console.log('Received data to save:', req.body); 

    try {
        if (!userID || !gameDate || difficulty === undefined || completed === undefined || timeTaken === undefined) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newSave = new Save({
            userID,
            gameDate,
            failed,
            difficulty,
            completed,
            timeTaken,
        });

        await newSave.save(); 
        res.status(201).json({ message: 'Game data saved successfully' });
    } catch (error) {
        console.error('Error saving game data:', error);
        res.status(500).json({ message: 'Error saving game data', error });
    }
};

// Recuperar histórico de resultados do jogo
exports.getGameHistory = async (req, res) => {
    const { userID } = req.params;

    try {
        const history = await Save.find({ userID });
        res.status(200).json(history);
    } catch (error) {
        console.error('Error retrieving game history:', error);
        res.status(500).json({ message: 'Error retrieving game history', error });
    }
};