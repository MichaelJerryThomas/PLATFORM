//JavaScript untuk Validasi Form 
        document.getElementById("signup-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah form submit

            // Ambil nilai dari input
            var fullName = document.getElementById("fullname").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Validasi input (contoh sederhana)
            if (fullName === "" || email === "" || password === "") {
                alert("Semua kolom harus diisi");
                return;
            }

            // Jika validasi sukses
            alert("Selamat, Anda berhasil sign up!");
            
        });
