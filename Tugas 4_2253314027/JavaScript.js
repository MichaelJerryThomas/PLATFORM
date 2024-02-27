document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var nama = document.getElementById('nama').value;
    var jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
    var resultHTML = '<h2>Hasil</h2>';
    resultHTML += '<p>Nama: ' + nama + '</p>';
    resultHTML += '<p>Jumlah Pilihan: ' + jumlahPilihan + '</p>';
    resultHTML += '<form id="pilihanForm">';
    for (var i = 1; i <= jumlahPilihan; i++) {
        resultHTML += '<label for="pilihan' + i + '">Pilihan ' + i + ':</label>';
        resultHTML += '<input type="text" id="pilihan' + i + '" name="pilihan' + i + '" required>';
    }
    resultHTML += '<input type="submit" value="OK">';
    resultHTML += '</form>';
    document.getElementById('result').innerHTML = resultHTML;

    document.getElementById('pilihanForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var selectedOption = document.querySelector('input[name="selectedOption"]:checked');
        var selectedText = selectedOption ? selectedOption.value : 'Tidak ada pilihan yang dipilih';
        var finalResult = '<h2>Hasil Akhir</h2>';
        finalResult += '<p>Hallo, nama saya ' + nama + ', saya mempunyai sejumlah ' + jumlahPilihan + ' pilihan yaitu:';
        for (var i = 1; i <= jumlahPilihan; i++) {
            finalResult += ' ' + document.getElementById('pilihan' + i).value + ',';
        }
        finalResult += ' dan saya memilih ' + selectedText + '</p>';
        document.getElementById('result').innerHTML = finalResult;
    });
});
