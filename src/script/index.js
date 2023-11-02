function checkLogin() {
	const username = "admin";
	const password = "admin";

	const inputUsername = document.getElementById("username").value;
	const inputPassword = document.getElementById("password").value;

	if (inputUsername === username && inputPassword === password) {
		alert("Login berhasil!");
		window.location.href = "src/pages/home.html";
	} else {
		alert("Username atau password salah. Silakan coba lagi.");
	}
}
