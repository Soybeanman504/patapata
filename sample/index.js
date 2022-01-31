window.onload = () => {

    keikyu();

}

function keikyu() {

    var content = document.getElementById('keikyu');
    var stations = ['品川', '京成津田沼', '成田空港', '印旛日本医大', '佐倉', '青砥', '押上', '浅草橋', '泉岳寺', '金沢文庫', '金沢八景', '三崎口', '三浦海岸', '浦賀', '横浜', '羽田空港', '神奈川新町'];
    content.dataset.station = 0;

    content.addEventListener('click', () => {

        if (++content.dataset.station == stations.length) {
            content.dataset.station = 0
        }
        Patapata.change(content, stations[content.dataset.station], 500, 3);

    });

}