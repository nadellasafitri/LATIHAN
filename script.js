// script.js

function loadJSON() {
    // Buat objek XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Tentukan URL untuk mengambil file JSON
    xhr.open("GET", "toko_buku.json", true);

    // Apa yang terjadi saat request selesai
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse data JSON
            var data = JSON.parse(xhr.responseText);

            // Tampilkan informasi nama toko, pengarang, dan alamat
            var infoDiv = document.getElementById("info");
            infoDiv.innerHTML = `
                <p><strong>Nama Toko:</strong> ${data.nama_toko}</p>
                <p><strong>Pengarang:</strong> ${data.pengarang}</p>
                <p><strong>Alamat:</strong> ${data.alamat}</p>
            `;

            // Tampilkan koleksi buku dalam bentuk tabel
            var tableDiv = document.getElementById("koleksi");
            var table = `
                <table border="1">
                    <tr>
                        <th>Judul</th>
                        <th>Penulis</th>
                        <th>Tahun</th>
                    </tr>
            `;

            // Tambahkan setiap buku ke dalam tabel
            data.koleksi_buku.forEach(function(buku) {
                table += `
                    <tr>
                        <td>${buku.judul}</td>
                        <td>${buku.penulis}</td>
                        <td>${buku.tahun}</td>
                    </tr>
                `;
            });

            // Tutup tabel
            table += `</table>`;

            // Tambahkan tabel ke dalam elemen HTML
            tableDiv.innerHTML = table;
        }
    };

    // Kirim request untuk mengambil file JSON
    xhr.send();
}
