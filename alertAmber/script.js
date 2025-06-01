// LOGIN (simulado)
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");
  const caseForm = document.getElementById("case-form");
  const casesContainer = document.getElementById("cases-container");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      // BACKEND INTEGRATION: validar con servidor real
      if (user === "admin" && pass === "1234") {
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("login-error").textContent = "Usuario o contraseña incorrectos.";
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (caseForm && casesContainer) {
    caseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = caseForm.name.value;
      const age = caseForm.age.value;
      const details = caseForm.details.value;
      const photo = caseForm.photo.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        const html = `
          <div class="case-card">
            <img src="${reader.result}" alt="Foto">
            <p><strong>🧒 Nombre:</strong> ${name}</p>
            <p><strong>🎂 Edad:</strong> ${age}</p>
            <p><strong>📍 Detalles:</strong> ${details}</p>
            <p><strong>🕒 Fecha subida:</strong> ${new Date().toLocaleString()}</p>
          </div>`;
        casesContainer.innerHTML = html + casesContainer.innerHTML;
        caseForm.reset();
      };
      reader.readAsDataURL(photo);
    });
  }
});
