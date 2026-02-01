# Cara Menambah Project Baru

## Langkah-langkah Sederhana

### 1. Buka File Content
Buka file `src/content.js` dengan text editor (Notepad, VS Code, dll)

### 2. Cari Bagian Experience
Scroll ke bawah sampai menemukan `experience: [`

### 3. Tambah Project Baru
Copy template di bawah ini dan paste di **PALING ATAS** setelah `experience: [`

```javascript
{
    "id": 46,  // Ganti dengan nomor berikutnya
    "role": "Nama Project",
    "company": "Nama Client/Perusahaan",
    "period": "2026",
    "description": "Location: Provinsi | Type: Jenis Project",
    "image": null
},
```

### 4. Isi Detail Project
- **id**: Naikkan 1 dari project terakhir (kalau terakhir 45, maka 46)
- **role**: Nama project (contoh: "Retaining Wall, BSD")
- **company**: Nama client (contoh: "PT Sinar Mas")
- **period**: Tahun project (contoh: "2026")
- **description**: Lokasi dan tipe project
- **image**: Biarkan `null` atau isi path gambar

### 5. Simpan dan Deploy
1. Save file (`Ctrl+S`)
2. Commit dan push ke GitHub
3. Website akan otomatis update!

---

## Contoh Lengkap

```javascript
experience: [
    // PROJECT BARU - TAMBAHKAN DI SINI
    {
        "id": 46,
        "role": "Retaining Wall, BSD City",
        "company": "PT Sinar Mas Land",
        "period": "2026",
        "description": "Location: Banten | Type: SierraScape Retaining Wall System",
        "image": null
    },
    // Project lama di bawah...
    {
        "id": 1,
        "role": "Fish Pond, Scintia Square Park",
        ...
    }
]
```

---

## Tips Penting

> ⚠️ **JANGAN HAPUS:**
> - Tanda kutip `" "`
> - Tanda koma `,`
> - Tanda kurung kurawal `{ }`

> ✅ **PASTIKAN:**
> - Setiap project diakhiri dengan koma `,` (kecuali yang terakhir)
> - ID tidak duplikat

---

## Troubleshooting

### Website Error / Blank?
- Cek apakah ada tanda kutip yang terhapus
- Cek apakah ada koma yang hilang
- Gunakan [JSONLint](https://jsonlint.com) untuk validasi

### Gambar Tidak Muncul?
1. Simpan gambar di folder `assets/images/`
2. Isi field image: `"assets/images/nama-gambar.jpg"`
