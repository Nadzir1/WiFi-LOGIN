function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showSuccess('login', 'Login berhasil!');
        if (rememberMe) {
            localStorage.setItem('rememberedUser', username);
        }
        // Modifikasi bagian ini
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // Redirect ke halaman dashboard
        }, 1000);
    } else {
        showError('login', 'Username atau password salah!');
    }
}

// script.js

// Event listener untuk form login saat dikirim
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form agar tidak dikirim secara otomatis

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    if (username && password) {
        // Simulasi login sukses
        alert("Login berhasil! Selamat datang, " + username + ".");
    } else {
        // Jika username atau password kosong
        alert("Silakan masukkan username dan password yang valid.");
    }
});

// Event listener untuk link "Forgot Password"
document.querySelector(".remember-forgot a").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah pengalihan langsung

    // Tampilkan pesan atau alihkan ke halaman "Forgot Password"
    alert("Mengalihkan ke halaman 'Forgot Password'.");
    // Contoh pengalihan: window.location.href = "forgot-password.html";
});

// Event listener untuk link "Register"
document.querySelector(".register-link a").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah pengalihan langsung

    // Tampilkan pesan atau alihkan ke halaman registrasi
    alert("Mengalihkan ke halaman registrasi.");
    // Contoh pengalihan: window.location.href = "register.html";
});

// Event listener untuk form registrasi (opsional jika ada form registrasi pada halaman yang sama)
document.querySelector("#registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.querySelector("#registerUsername").value;
    const newPassword = document.querySelector("#registerPassword").value;

    if (newUsername && newPassword) {
        alert("Registrasi berhasil! Username kamu: " + newUsername);
        // Simpan data atau lakukan tindakan lain yang diperlukan
    } else {
        alert("Silakan masukkan username dan password untuk registrasi.");
    }
});
