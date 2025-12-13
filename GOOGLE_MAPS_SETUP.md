# Setup Google My Maps untuk Multiple Markers

## Langkah-langkah Setup:

### 1. Buat Google My Maps

1. Buka https://www.google.com/mymaps
2. Login dengan Google Account
3. Klik **"Create a new map"**

### 2. Tambahkan Semua Lokasi

Tambahkan 16 cabang berikut sebagai markers:

#### PT Farrasindo Perkasa Branches:

1. **Meruya Branch** - Srengseng, Kembangan, West Jakarta (-6.1664, 106.7629)
2. **Sentul Ranch** - Jl. Bina Marga No. 76, Bogor (-6.5504, 106.8719)
3. **Belanga Branch** - Pasir Bolang, Tigaraksa, Banten (-6.3574, 106.4242)
4. **Cikarang Branch** - Jl. Gemalajaya No.111, Bekasi (-6.2733, 107.1525)
5. **Jatiasih Branch** - Jl. Cikini Raya, Bekasi Sel (-6.2893, 106.9570)
6. **Bandung Branch** - Jl. Gedelage Selatan No.165, Bandung (-6.9331, 107.6390)
7. **Cirebon Branch** - Jl. Mundupesisir, Cirebon (-6.7126, 108.5501)
8. **Semarang Branch** - Jl. Semarang - Demak No.KM.8, Semarang (-6.9538, 110.4854)
9. **Yogyakarta Branch** - Jl. Berijah - Kalasan, Yogyakarta (-7.7583, 110.4656)
10. **Solo Branch** - Jl. Adi Sucipto No.Km. 8, Solo (-7.5562, 110.7685)
11. **Kediri Branch** - Gempolsari, Baye, Kediri (-7.8123, 111.9856)
12. **POOL 4 Branch** - Jl. Srengseng Raya, Jakarta Barat (-6.1757, 106.7580)
13. **POOL 5 Branch** - Meruya Utara, Jakarta Barat (-6.1708, 106.7501)
14. **Surabaya Branch** - Semampir, Prasung, Sidoarjo (-7.4461, 112.7169)
15. **Malang Branch** - Jl. Parun An-Nur Regency, Malang (-8.0031, 112.7808)

#### PT Gunung Bumi Perkasa:

16. **Head Office** - Jl. Raya Srengseng No. 41 A-B, Jakarta (-6.1664, 106.7629)

### 3. Customize Map

- Klik pada layer name untuk rename (misal: "Farrasindo Group Branches")
- Ubah icon markers (pilih icon yang sama untuk consistency)
- Tambahkan deskripsi di setiap marker (nama, alamat, telepon)
- Atur base map style (Standard, Satellite, atau Terrain)

### 4. Get Embed Code

1. Klik icon **Menu (☰)** di sebelah map title
2. Pilih **"Share or embed map"**
3. Pilih tab **"Embed on my website"**
4. Copy iframe code

### 5. Update Component

Paste iframe src URL ke file: `src/components/contact/BranchLocations.tsx`

Ganti baris ini:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18..." // <-- Ganti dengan My Maps embed URL
```

### Format URL Google My Maps:

```
https://www.google.com/maps/d/embed?mid=YOUR_MAP_ID&ehbc=2E312F
```

## Alternatif: Multiple Directions API

Jika tidak ingin pakai My Maps, bisa gunakan Google Maps Directions API dengan multiple waypoints:

```html
<iframe
  src="https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY
    &origin=-6.1664,106.7629
    &destination=-8.0031,112.7808
    &waypoints=-6.5504,106.8719|-6.3574,106.4242|-6.2733,107.1525"
  ...
</iframe>
```

Tapi ini memerlukan Google Maps Embed API Key dan hanya bisa maksimal 10 waypoints.

## Rekomendasi:

**Gunakan Google My Maps** karena:

- ✅ Gratis, tidak perlu API key
- ✅ Unlimited markers
- ✅ Easy to manage dan update
- ✅ Bisa custom styling
- ✅ Bisa add info window, gambar, dll
- ✅ User-friendly interface
