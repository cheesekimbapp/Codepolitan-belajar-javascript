// let age = Math.random() * 100;
// console.log('Umur:', age);
// if (age >= 30) {
//     console.log('boleh masuk');
// } else {
//     console.log('dilarang masuk');
// }


// const hari = 'sabtu';

// if (hari === 'senin') {
//     console.log('Semangat dalam bekerja');
// } else if (hari === 'sabtu') {
//     console.log('Selamat berlibur');
// }

// const nilai = 80;
// console.log('Nilai anda:', nilai);

// if (nilai < 50) {
//     console.log('Nilai anda E');
// } else if (nilai < 60) {
//     console.log('Nilai anda D');
// } else if (nilai < 70) {
//     console.log('Nilai anda C');
// } else if (nilai < 80) {
//     console.log('Nilai anda B');
// } else {
//     console.log('Nilai anda A')
// }

// nested if
// const password = prompt('Buat password baru');
// if(password.length >= 8) {
//     if(password.indexOf(' ') === -1) {
//         console.log('Password valid');
//     } else {
//         console.log('Password tidak boleh ada spasi');
//     }
// } else {
//     console.log('Password minimal 8 karakter');
// }


// // nested if buat password dengan logic AND
// const password = prompt('Buat password baru');
// if (password.length >= 8 && password.indexOf(' ') === -1) {
//     console.log('Password Valid');
// } else {
//     console.log('Password tidak valid');
// }

// // nested if validasi role akun dengan logic OR
// const role = prompt('Masukan role akun anda').toLowerCase();
// if (role === 'admin' || role === 'spv' || role === 'ceo') {
//     console.log('Anda boleh mengaksesnya');
// } else {
//     console.log('Anda tidak boleh mengaksesnya');
// }

// // // nested if validasi role akun dengan logic NOT
// const role = prompt('Masukan role akun anda').toLowerCase();
// if (role !== 'admin'){
//     console.log('Anda tidak diizinkan masuk');
// } else {
//     console.log('Anda diizinkan masuk');
// }

// // // // logic switch
// const hari = prompt('Masukan hari ini').toLowerCase();
// switch (hari) {
//     case 'senin':
//         console.log('Hari Senin yang Indah');
//         break;
//     case 'selasa':
//         console.log('Horeee hari ini hari selasa');
//         break;
//     case 'rabu':
//         console.log('Anjay udah hari rabu');
//         break;
//     case 'kamis':
//         console.log('Kamis manis');
//         break;
//     case 'jumat':
//         console.log('Jumat berkah');
//         break;
//     case 'sabtu':
//         console.log('Selamat berlibur');
//         break;
//     case 'minggu':
//         console.log('Hari minggu santai');
//         break;
//     default:
//         console.log('Hari ini hari apa yaa?');
// }


// // perulangan for
// for (let i = 1; i<=20; i++) {
//     console.log(i);
// } //ini akan menampilkan angka 1 sampai 20


// for (let i = 0; i <= 20; i+=2) {
//     console.log(i);
// } //ini akan menampilkan angka genap dari 0 sampai 20

// for (let i = 20; i >= 0; i--) {
//     console.log(i);
// } //ini akan menampilkan angka dari 20 sampai 0

// for (let i = 1; i <= 100000; i*=10) {
//     console.log(i);
// } //ini akan menampilkan angka 1, 10, 100, 1000, 10000, 100000

// //perulangan for untuk array
// const animals = ['kucing', 'kelinci', 'ayam', 'bebek', 'ikan'];
// for (let i = 0; i < animals.length; i++) {
//     console.log(i + 1, animals[i]);
// } // ini akan menampilkan semua data array animals

//nested loop for
// const barisMurid = [
//     ['Asep', 'Budi', 'Caca'],
//     ['Dedi', 'Euis', 'Fafa'],
//     ['Gaga', 'Hani', 'Iwan']
// ];

// for (let i = 0; i < barisMurid.length; i++) {
//     const row = barisMurid[i];
//     console.log(`Kursi Baris #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }
// } // ini akan menampilkan data array barisMurid

// // nested loop for
// const pilihan = 'abcd';
// for (let i = 1; i<10; i++) {
//     console.log(`${i}. Soal nomor ${i}:`);
//     for(let j = 0; j < pilihan.length; j++){
//         console.log(`   ${pilihan[j]}. Pilihan Jawaban`);
//     }
// } // ini akan menampilkan soal nomor 1 sampai 9 dengan pilihan jawaban a, b, c, d

// // // while loop
// let number = 0;
// while (number <= 10) {
//     console.log(number);
//     number++;
// } // ini akan menampilkan angka 0 sampai 10

// // contoh while loop tebak password
// const password = 'Admin123';
// let tebak = prompt('Tebak passwordnya');
// while (tebak !== password) {
//     tebak = prompt('Tebakan salah, coba lagi');
// } // ini akan menampilkan prompt tebakan salah, coba lagi jika salah

// alert('Tebakan benar'); // ini akan menampilkan alert tebakan benar jika benar


let input = prompt('katakan sesuatu');
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop') break;
}

alert('Berhenti');