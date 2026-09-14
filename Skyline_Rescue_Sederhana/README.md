# Skyline Rescue — Versi Sederhana

Proyek platformer GDevelop untuk mempelajari tiga mekanik inti: menembak musuh, menyelamatkan warga, dan mengawal warga ke goal. Seluruh logika permainan memakai event visual native GDevelop; tidak ada event JavaScript atau extension tambahan.

## Membuka proyek

1. Ekstrak seluruh ZIP ke satu folder.
2. Buka `game.json` melalui pilihan **Open project / Open a project from your computer** di GDevelop. Biarkan folder `assets` berada di samping `game.json`.
3. Buka scene **Game**, lalu tekan **Preview**. Permainan langsung dimulai.
4. Buka tab **Events** untuk mempelajari enam kelompok logika.

Buka `Panduan_Visual.html` di browser untuk membaca pemetaan kondisi → aksi, variabel, dan urutan belajar. Panduan dapat dibaca tanpa koneksi internet.

## Kontrol dan tujuan

| Tombol | Aksi |
|---|---|
| A / D atau ← / → | Bergerak |
| Space | Melompat |
| Z | Menembak ke arah terakhir player; dapat ditahan |
| E | Menyelamatkan warga saat dekat |
| R | Mengulang scene saat tombol dilepas |

Selamatkan satu warga, lalu bawa ke pos evakuasi di sebelah kanan. Menang ketika warga sudah aman dan player berada di goal. Kalah jika nyawa player atau warga habis.

## Penyederhanaan dari Skyline Rescue

| Bagian | Versi sebelumnya | Versi sederhana |
|---|---|---|
| NPC | 3 warga, antrean, ID, deteksi rintangan | 1 warga, mengikuti berdasarkan jarak horizontal |
| Musuh | Bergerak, memilih target, menembak, memukul | 2 penjaga diam dari satu jenis; menembak horizontal ke arah player |
| Level | Jalur panjang, jurang, rintangan | Jalur rata sepanjang 2.560 piksel; platform atas opsional |
| Progres | Koin, medkit, beberapa penghitung | HP player, HP warga, status warga |
| Event | 108 baris event | 51 baris event dalam 6 kelompok |

Player memiliki 5 HP, warga 3 HP, dan setiap musuh 2 HP. Setiap peluru memberi 1 damage. Peluru player aman bagi warga; peluru musuh dapat mengenai player maupun warga yang belum aman.

## Isi paket

- `game.json` — proyek GDevelop yang dapat diedit.
- `assets/` — sprite SVG dan efek suara WAV.
- `Panduan_Visual.html` — panduan kondisi dan aksi untuk belajar visual scripting.
- `Preview.png` — cuplikan permainan.
- `README.md` — petunjuk membuka dan memainkan proyek.

## Batas desain

NPC mengikuti di tanah rata dan tidak melakukan lompatan otomatis. Platform atas dapat dipakai player; jalur bawah tetap tersambung. Saat mengedit level, jaga jalur bawah bebas dari jurang, dinding, dan tangga wajib. Musuh menembak lurus; hanya tabrakan peluru dengan terrain yang memblokirnya.

## Validasi

Dibuka dan diekspor memakai engine GDevelop 5.6.269-0. Sebanyak 15 skenario runtime lulus, termasuk mengikuti ke dua arah, cooldown tiap musuh, damage dan kebal sementara, prioritas kalah, restart, serta perjalanan penuh dengan kontrol keyboard dan musuh aktif sampai menang. Tidak ada error JavaScript runtime pada pengujian tersebut.
