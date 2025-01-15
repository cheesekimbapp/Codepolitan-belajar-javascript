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
