const express = require('express');
const axios = require('axios');
const app = express();

const PRIMARY_API = 'https://api.openweathermap.org/data/2.5/weather';
const BACKUP_API = 'https://api.weatherstack.com/current';
const PRIMARY_API_KEY = 'a89967e41daaa96ac85ba4980517b22e';
const BACKUP_API_KEY = 'd0ceacfe0b9866bd8e40d134fd798898';

app.use(express.json());

app.get('/weather', async (req, res) => {
    const { city } = req.query;

    try {
        // Tentativa com API primária
        const primaryResponse = await axios.get(PRIMARY_API, {
            params: { q: city, appid: PRIMARY_API_KEY, units: 'metric' },
        });
        return res.json({ source: 'primary', data: primaryResponse.data });
    } catch (error) {
        console.error('API Primária falhou. Tentando backup...');

        try {
            // Tentativa com API de backup
            const backupResponse = await axios.get(BACKUP_API, {
                params: { query: city, access_key: BACKUP_API_KEY },
            });
            return res.json({ source: 'backup', data: backupResponse.data });
        } catch (backupError) {
            console.error('API de Backup falhou.');
            return res.status(500).json({ error: 'Nenhuma API disponível no momento.' });
        }
    }
});

app.listen(3000, () => console.log('Backend rodando na porta 3000.'));
