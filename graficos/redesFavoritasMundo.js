import { getCSS } from "./commom.js"

async function redesFavoritasMundo() {
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json"
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        },
    ],
    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais que os usuários mais gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font'),
            },
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16,
        },
      },
    },

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, laytout);
}

redesFavoritasMundo()
