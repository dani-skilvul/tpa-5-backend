

**Nama : Muhammad Dani Haikal**  
**Tim : BE-8**  
**Mentor : Luthfi Fitra Musyaffa**

# Webservice Restful API Operasi Todo List

Ini adalah webservice Restful API untuk operasi todo list yang dibangun menggunakan framework Express.js dan ORM Sequelize.

## Fitur
API ini menyediakan fitur berikut:

- Register: Endpoint untuk mendaftar pengguna baru.
- Login: Endpoint untuk masuk ke akun pengguna yang sudah terdaftar.
- Membuat Todo: Endpoint untuk membuat entri todo baru.
- Melihat Semua Todo: Endpoint untuk melihat semua entri todo yang ada.
- Melihat Satu Todo: Endpoint untuk melihat detail satu entri todo berdasarkan ID.
- Mengedit Satu Todo: Endpoint untuk mengedit satu entri todo berdasarkan ID.
- Menghapus Satu Todo: Endpoint untuk menghapus satu entri todo berdasarkan ID.

## Langkah-langkah Menjalankan

Berikut adalah langkah-langkah yang perlu diikuti untuk menjalankan webservice API:

1. Pastikan Anda memiliki Node.js dan npm terinstal di komputer Anda.

2. Clone repositori ini ke komputer lokal Anda.
berikut:
```sh
git clone https://github.com/dani-skilvul/tpa-5-backend.git
```

3. Import file 'skilvul_todo.sql' yang terdapat di dalam folder 'import' ke dalam database MySQL Anda.

4. Buatlah file '.env' diarea terluar pada project ini, isilah file '.env' dengan kode berikut:

```sh
ACCESS_TOKEN_SECRET=silahkan_masukkan_key_bebas_untuk_token_jwt_login_disini
```

5. Install dependensi dengan menjalankan perintah berikut:
```sh
npm install
```

6. Untuk menjalankan API menggunakan Node.js, jalankan perintah berikut:
```sh
npm run start
```
Jika ingin menggunakan library Nodemon untuk hot-reloading saat pengembangan, jalankan perintah berikut:
```sh
npm run dev
```

7. API sekarang berjalan di http://localhost:3030/. Anda dapat mengakses endpoint-endpoint API yang disebutkan di bawah ini.

## Pengetesan
Untuk melakukan pengujian API, Anda dapat menggunakan Postman atau alat serupa. Berikut adalah langkah-langkah untuk pengujian menggunakan Postman:

1. Impor file 'Skilvul-TPA-5-Backend.postman_collection.json' yang terdapat di dalam folder 'import' ke dalam koleksi Postman Anda.

2. Sebelum melakukan operasi CRUD pada entri todo, Anda perlu membuat akun terlebih dahulu dan melakukan login. Gunakan rute-rute berikut:
- POST http://localhost:3030/register: Rute untuk mendaftar pengguna baru.  
Contoh Request Body :
```sha
{
  "nama": "dani",
  "email": "dani@gmail.com",
  "password": "123",
  "confPassword": "123"
}
```
- POST http://localhost:3030/login: Rute untuk melakukan login dan menghasilkan token JWT yang disimpan di header 'Authorization' dengan waktu kadaluwarsa 60 detik.  
Contoh Request Body :
```sha
{
  "email": "dani@gmail.com",
  "password": "123",
}
```
Contoh Token JWT yang didapatkan pada header :
```sha
Authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2ODQ5MTMzODUsImV4cCI6MTY4NDkxMzQ0NX0.aDB0woP1HodszxFLioNlO72TE3Uc83Wmd8a5OB8dvPg
```

3. Setelah berhasil login, Anda dapat menggunakan token JWT yang dihasilkan pada header dengan nama 'Authorization' untuk mengakses rute-rute operasi todo berikut:
Contoh Penggunaan Token JWT pada header :
```sha
Authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2ODQ5MTMzODUsImV4cCI6MTY4NDkxMzQ0NX0.aDB0woP1HodszxFLioNlO72TE3Uc83Wmd8a5OB8dvPg
```
- POST http://localhost:3030/todo: Rute untuk membuat entri todo baru.  
Contoh Request Body :
```sha
{
  "todo": "Saya akan makan"
}
```
- GET http://localhost:3030/todos: Rute untuk melihat semua entri todo.
- GET http://localhost:3030/todo/:id: Rute untuk melihat detail satu entri todo berdasarkan ID.
- PUT http://localhost:3030/todo/:id: Rute untuk mengedit satu entri todo berdasarkan ID.  
Contoh Request Body :
```sha
{
  "todo": "Saya akan belajar"
}
```
- DELETE http://localhost:3030/todo/:id: Rute untuk menghapus satu entri todo berdasarkan ID.

5. Silakan gunakan koleksi Postman yang telah diimpor untuk menguji API dengan menggunakan rute-rute yang disebutkan di atas.

**Terima kasih telah menggunakan webservice Restful API ini!**
