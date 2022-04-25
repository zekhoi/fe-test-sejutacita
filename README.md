# Deskripsi

Repository ini merupakan hasil dari test Coding Technical dari [SejutaCita](https://sejutacita.id) dalam rangka perekrutan magang Frontend Developer - ReactJS.

# Tools

Website ini dibuat dengan menggunakan [React.JS](https://reactjs.org/) dengan bantuan [Next.JS](https://nextjs.org/) sebagai framework, styling menggunakan [TailwindCSS](https://tailwindcss.com/) dan bantuan [clsx](https://www.npmjs.com/package/clsx) untuk styling secara kondisional, serta [Axios](https://axios-http.com/) untuk mengkonsumsi API.

# Penggunaan

Konfigurasi `.env`

```env
DOMAIN_HOST="https://domain.anda"
```

Lalu jalankan perintah:

```bash
yarn install && yarn dev
```

atau

```bash
npm install && npm run dev
```

# Masalah

Terdapat masalah saat mengkonsumsi API, yaitu terjadi CORS (Cross-Origin Resource Sharing) error karena tidak mengkonsumsi API dari server yang sama (lintas server / domain). Hal ini terjadi karena konfigurasi dari Backend yang kurang.

# Penyelesaian Masalah

Masalah dapat diselesaikan dengan beberapa cara seperti misalnya konfigurasi CORS pada Backend, namun dalam hal ini saya menggunakan pengaturan proxy karena tidak memiliki akses di Backend.

Karena saya menggunakan NextJS maka penyelesaiannya adalah membuat konfigurasi `rewrites` di file `next.config.js` dengan destinasi ke url API yang bermasalah tadi.

# Saran

Dari masalah CORS tersebut maka disarankan kepada pihak Backend untuk mengkonfigurasi CORS terlebih dahulu agar dapat dikonsumsi oleh tim Frontend dan agar tidak terjadi masalah serupa dikemudian hari.

# Referensi

- [CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors)
- [Rewrites - NextJS](https://nextjs.org/docs/api-reference/next.config.js/rewrites).
