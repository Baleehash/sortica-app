# 🌱 SORTICA - Sort. Solve. Sustain.

**Platform Digital untuk Pengelolaan Sampah Berkelanjutan di Kota Bandung**

---

## 📋 Deskripsi

SORTICA adalah company profile website yang menyajikan solusi digital untuk permasalahan sampah di Kelurahan Rancabolang, Kota Bandung. Website ini dikembangkan dengan HTML, CSS (Tailwind), dan JavaScript dengan fokus pada user experience, animasi menarik, dan data visualization.

### ✨ Fitur Utama

- 🎨 **Modern & Responsive Design** - Optimal di semua device (desktop, tablet, mobile)
- ⚡ **AOS (Animate On Scroll)** - Smooth scroll animations yang sangat menarik
- ✨ **Particles.js Background** - Interactive particle effects pada hero section
- 📊 **Data Visualization** - Chart interaktif menggunakan Chart.js
- 🎯 **Counter Animations** - Animated statistics untuk impact yang lebih kuat
- 📱 **Mobile-First Approach** - Dioptimalkan untuk pengalaman mobile yang sempurna
- 🚀 **Performance Optimized** - Fast loading & smooth scrolling
- 🎭 **Seamless UX** - Minimalis, modern, dan sangat engaging

---

## 🏗️ Struktur Project

```
sortica-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom CSS styles
├── js/
│   └── main.js         # JavaScript untuk animasi & interaktivitas
└── README.md           # Dokumentasi project
```

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **HTML5** | - | Struktur halaman |
| **Tailwind CSS** | 3.x | Styling & responsive design |
| **JavaScript (Vanilla)** | ES6+ | Animasi & interaktivitas |
| **AOS** | 2.3.1 | Animate On Scroll library |
| **Particles.js** | 2.0.0 | Interactive particle background |
| **Chart.js** | Latest | Data visualization |
| **Iconify** | 3.x | Icon library |
| **Google Fonts (Inter)** | - | Typography |

---

## 📄 Halaman & Section

### 1. **Hero Section**
- **Particles.js** interactive background dengan hijau theme
- Typing effect untuk slogan
- Animated counters untuk quick stats
- **AOS fade animations** untuk smooth entrance
- CTA buttons dengan hover effects

### 2. **Stats Section**
- Counter animation untuk data sampah Kota Bandung
- 4 Stat cards dengan **flip-left AOS animation**
- Info card tentang krisis TPA Sarimukti dengan **zoom-in effect**

### 3. **About Section**
- Penjelasan tentang SORTICA
- Misi, Visi, dan Kolaborasi
- Feature cards dengan hover animations

### 4. **Data Visualization Section**
- **Pie Chart**: Komposisi sampah Kota Bandung
- **Bar Chart**: Volume sampah per kategori
- Breakdown cards untuk setiap jenis sampah

### 5. **Program Kang PisMan Section**
- 3 Pilar: Kurangi, Pisahkan, Manfaatkan
- Fitur SORTICA untuk mendukung program
- Interactive hover effects

### 6. **Contact Section**
- Contact form dengan validasi
- Info kontak (lokasi, email, telepon)
- Social media links
- Google Maps integration (optional)

### 7. **Footer**
- Quick links
- Newsletter subscription
- Copyright & legal links

---

## 🎨 Color Palette

### Primary Colors (Hijau Theme)
```css
Hijau Utama:  #10B981 (emerald-500)
Hijau Gelap:  #047857 (emerald-700)
Hijau Muda:   #D1FAE5 (emerald-100)
```

### Data Visualization Colors
```css
Organik (Hijau):  #10B981
Plastik (Biru):   #3B82F6
Kertas (Kuning):  #F59E0B
Lainnya (Abu):    #6B7280
```

---

## 🚀 Cara Menjalankan Website

### Metode 1: Buka Langsung di Browser

1. Navigate ke folder project
2. Double-click file `index.html`
3. Website akan terbuka di default browser

### Metode 2: Menggunakan Live Server (Recommended)

**Jika menggunakan VS Code:**

1. Install extension "Live Server"
2. Right-click pada `index.html`
3. Pilih "Open with Live Server"
4. Website akan terbuka di `http://localhost:5500`

**Jika menggunakan Python:**

```bash
# Python 3
cd sortica-website
python -m http.server 8000

# Buka browser ke http://localhost:8000
```

**Jika menggunakan Node.js:**

```bash
# Install http-server globally
npm install -g http-server

# Jalankan server
cd sortica-website
http-server

# Buka browser ke http://localhost:8080
```

---

## ☁️ Deployment ke AWS

### Option 1: AWS S3 + CloudFront (Static Website - Recommended)

#### Step 1: Upload ke S3

1. **Buat S3 Bucket**
   - Login ke AWS Console
   - Buka S3 Service
   - Create bucket dengan nama: `sortica-website`
   - Region: Asia Pacific (Singapore) atau terdekat

2. **Configure Bucket untuk Static Website**
   ```
   Properties → Static Website Hosting → Enable
   Index document: index.html
   Error document: index.html
   ```

3. **Upload Files**
   - Upload semua file (index.html, css/, js/)
   - Set permissions: Public Read

4. **Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::sortica-website/*"
       }
     ]
   }
   ```

#### Step 2: Setup CloudFront (Optional - untuk CDN & HTTPS)

1. Create CloudFront Distribution
2. Origin: S3 bucket endpoint
3. Default Root Object: index.html
4. Wait for deployment (~15 mins)
5. Access via CloudFront URL

### Option 2: AWS EC2 (Jika perlu server)

#### Setup EC2 Instance

```bash
# 1. Launch EC2 instance (Ubuntu/Amazon Linux)
# 2. Connect via SSH
# 3. Install Nginx

sudo apt update
sudo apt install nginx -y

# 4. Upload files ke /var/www/html
sudo rm /var/www/html/index.nginx-debian.html
sudo cp -r sortica-website/* /var/www/html/

# 5. Configure Nginx
sudo nano /etc/nginx/sites-available/default

# 6. Restart Nginx
sudo systemctl restart nginx

# 7. Access via EC2 Public IP
```

### Option 3: AWS Amplify (Easiest)

1. Login to AWS Amplify Console
2. "Deploy without Git provider"
3. Drag & drop `sortica-website` folder
4. Amplify will auto-deploy
5. Get your live URL

**Rekomendasi: AWS S3 + CloudFront** - Paling cost-effective untuk static website

---

## 📱 Responsive Breakpoints

Website sudah dioptimasi untuk berbagai ukuran layar:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## ✅ Checklist Before Deployment

- [ ] Test di berbagai browser (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive di mobile, tablet, desktop
- [ ] Validasi HTML (https://validator.w3.org/)
- [ ] Optimize images (jika ada)
- [ ] Test form submission
- [ ] Check all links
- [ ] Test animations & transitions
- [ ] Performance check (Google PageSpeed Insights)
- [ ] SEO meta tags (optional)

---

## 🎯 Data Sampah yang Digunakan

### Kota Bandung
- **Total sampah**: 1.300 ton/hari
- **Tidak terangkut**: 300 ton/hari
- **Komposisi**:
  - Sisa Makanan: 716.51 ton (55%)
  - Plastik: 268.83 ton (21%)
  - Kertas: 211.2 ton (16%)
  - Lainnya: 103.46 ton (8%)

### Kelurahan Rancabolang
- **Penduduk**: ±12.000 jiwa
- **Produksi sampah**: ±12 ton/hari

---

## 🔧 Customization Guide

### Mengubah Warna

Edit di `index.html` bagian Tailwind config atau `css/style.css`:

```javascript
// Di index.html <script> section
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#10B981', // Ganti dengan warna pilihan
        }
      }
    }
  }
}
```

### Mengubah Data Chart

Edit di `js/main.js` bagian Chart.js:

```javascript
data: {
  labels: ['Sisa Makanan', 'Plastik', 'Kertas', 'Lainnya'],
  datasets: [{
    data: [716.51, 268.83, 211.2, 103.46], // Ganti dengan data baru
  }]
}
```

### Mengubah Konten

Edit langsung di `index.html` - semua konten sudah terstruktur dengan jelas per section.

---

## 🐛 Troubleshooting

### Chart tidak muncul?
- Check browser console untuk errors
- Pastikan Chart.js CDN loaded dengan benar
- Clear browser cache

### Animasi tidak smooth?
- Check browser compatibility
- Disable browser extensions yang mungkin interfere
- Test di incognito/private mode

### Mobile menu tidak berfungsi?
- Check `js/main.js` sudah terload
- Check browser console untuk errors

---

## 📞 Support & Contact

Jika ada pertanyaan atau masalah:
- **Email**: info@sortica.id
- **Location**: Kelurahan Rancabolang, Kota Bandung

---

## 📜 License

© 2024 SORTICA. All rights reserved.

---

## 🙏 Credits

- **Design & Development**: SORTICA Team
- **Data Source**: Pemkot Bandung - Program Kang PisMan
- **Icons**: Iconify (Material Design Icons)
- **Fonts**: Google Fonts (Inter)
- **Framework**: Tailwind CSS
- **Charts**: Chart.js

---

## 🚀 Roadmap (Future Features)

- [ ] Mobile App Development
- [ ] User Authentication
- [ ] Bank Sampah Digital Integration
- [ ] Real-time Waste Tracking
- [ ] Gamification & Rewards System
- [ ] TPS Location Maps (Google Maps API)
- [ ] Push Notifications
- [ ] Multi-language Support

---

**Dibuat dengan ❤️ untuk Bandung yang lebih bersih dan berkelanjutan** 🌱
