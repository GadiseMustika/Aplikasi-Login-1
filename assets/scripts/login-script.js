/** @module Login-Script */
/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel loginFormElement untuk input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel loginFormElement untuk input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Comment :  Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
* Membuat variabel email untuk menyimpan nilai email pada saat button ditekan.
* @constant {string}
*/
  const email = inputEmailElement.value;
  
   /**
* Membuat variabel password untuk menyimpan nilai password pada saat button ditekan.
* @constant {string}
*/
  const password = inputPasswordElement.value;
  
  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
    
       /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
  } else {
    showPopUp();
  }
});
