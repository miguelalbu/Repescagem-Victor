async function fetchWeather() {
    const city = document.getElementById('city').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Carregando...';

    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        const data = await response.json();

        if (data.error) {
            resultDiv.innerHTML = 'Erro ao buscar dados.';
        } else {
            resultDiv.innerHTML = `
                <p>Fonte: ${data.source}</p>
                <p>Temperatura: ${data.data.main ? data.data.main.temp : data.data.current.temperature} °C</p>
                <p>Descrição: ${data.data.weather ? data.data.weather[0].description : data.data.current.weather_descriptions[0]}</p>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = 'Erro na conexão.';
    }
}
