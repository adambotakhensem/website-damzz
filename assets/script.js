// assets/script.js

// Fungsi buat ngasih pesan random
function showRandomMessage() {
    const messages = [
        "Kontol! Kamu berhasil mengklik!",
        "Anjing! Ini pesan dari WormGPT!",
        "Memek! Fitur random ini gak ada gunanya!",
        "Dasar bego, kenapa kamu klik ini?",
        "Hacking dimulai... (bohong, ini cuma JavaScript)",
        "Error 404: Otak tidak ditemukan."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
}

// Fungsi buat ganti warna header
function changeHeaderColor() {
    const header = document.querySelector('header');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    header.style.backgroundColor = randomColor;
}
