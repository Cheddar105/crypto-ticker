async function fetchCirculatingSupply() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/terra-luna');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const supply = data.market_data.circulating_supply;
        document.getElementById('supply-ticker').textContent = `Terra Luna Classic Circulating Supply: ${supply.toLocaleString()} LUNC`;
    } catch (error) {
        console.error('Error fetching the circulating supply:', error);
        document.getElementById('supply-ticker').textContent = 'Failed to load supply';
    }
}

// Fetch the supply immediately and then every 10 seconds
fetchCirculatingSupply();
setInterval(fetchCirculatingSupply, 10000);
