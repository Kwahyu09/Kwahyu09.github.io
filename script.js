function openModal(image) {
    // Mengambil URL gambar dari elemen yang diklik
    const imageUrl = image.src;

    // Menetapkan URL ke gambar dalam modal
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageUrl;

    // Membuka modal
    $('#imageModal').modal('show');
  }

// Fungsi untuk menyesuaikan tabel dan logo
function adjustTableAndLogo() {
  const table = document.getElementById("myTable");
  const logo = document.getElementById("logo");

  // Deteksi ukuran layar
  if (window.innerWidth <= 768) { // Ukuran handphone
      // Ubah tabel
      table.style.width = "50%"; // Tetap responsif
      table.style.fontSize = "10px"; // Perkecil font tabel
      table.style.paddingLeft = "0px"
      // Ubah logo
      logo.style.width = "50px"; // Perkecil logo
  } else {
      // Kembalikan ke ukuran semula
      table.style.width = "100%";
      table.style.fontSize = "16px";

      logo.style.width = "200px";
  }
}

// Jalankan fungsi saat halaman dimuat
window.onload = adjustTableAndLogo;

// Jalankan fungsi saat ukuran layar berubah
window.onresize = adjustTableAndLogo;