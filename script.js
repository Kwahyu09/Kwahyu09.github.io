function openModal(image) {
  // Mengambil URL gambar dari elemen yang diklik
  const imageUrl = image.src

  // Menetapkan URL ke gambar dalam modal
  const modalImage = document.getElementById("modalImage")
  modalImage.src = imageUrl

  // Membuka modal
  $("#imageModal").modal("show")
}

// Fungsi untuk menyesuaikan tabel dan logo
function adjustTableAndLogo() {
  const table = document.getElementById("myTable")
  const logo = document.getElementById("logo")

  // Deteksi ukuran layar
  if (window.innerWidth <= 768) {
    // Ukuran handphone
    // Ubah tabel
    table.style.width = "50%" // Tetap responsif
    table.style.fontSize = "10px" // Perkecil font tabel
    table.style.paddingLeft = "0px"
    // Ubah logo
    logo.style.width = "50px" // Perkecil logo
  } else {
    // Kembalikan ke ukuran semula
    table.style.width = "100%"
    table.style.fontSize = "16px"

    logo.style.width = "200px"
  }
}

// Jalankan fungsi saat halaman dimuat
window.onload = adjustTableAndLogo

// Jalankan fungsi saat ukuran layar berubah
window.onresize = adjustTableAndLogo

const path = document.getElementById("wave-path")
let mouseX = 0

document.getElementById("home").addEventListener("mousemove", (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  mouseX = e.clientX - rect.left

  updateWave(mouseX / rect.width) // normalize 0–1
})

function updateWave(offset) {
  const center = 160
  const amp = 100 // tinggi gelombang
  const freq = 2 // jumlah kurva

  let d = "M0," + center

  for (let i = 1; i <= 6; i++) {
    const x = (1440 / 6) * i
    const wave = Math.sin((i + offset * 10) * freq) * amp
    d += " S" + (x - 120) + "," + (center + wave) + " " + x + "," + center
  }

  d += " L1440,320 L0,320 Z"
  path.setAttribute("d", d)
}

function openModal(img) {
  document.getElementById("modalImage").src = img.src
  $("#imageModal").modal("show")
}
