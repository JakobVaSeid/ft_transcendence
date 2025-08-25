export function renderRegister() {
  const container = document.getElementById("app");
  const template = document.getElementById("register-template") as HTMLTemplateElement;

``


  if (container && template) {
    const clone = template.content.cloneNode(true);
    container.innerHTML = "";
    container.appendChild(clone);

    const registerForm = document.getElementById("login-form") as HTMLFormElement | null;
    if (registerForm) {
      registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const emailInput = document.getElementById("email") as HTMLInputElement | null;
        const passwordInput = document.getElementById("password") as HTMLInputElement | null;
        const username = document.getElementById("username") as HTMLInputElement | null;

        if (!emailInput || !passwordInput) return;

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
          console.error("❌ Missing credentials");
          return;
        }

        try {
          const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, password, username }),
          });

          const data = await response.json();

          if (response.ok) {
            console.log("✅ Registration successful:", data);

            // After register, you might auto-login OR redirect to login
            window.location.hash = "#/login";
          } else {
            console.error("❌ Registration failed:", data.message || "Unknown error");

            const errorMsg = document.getElementById("error-message");
            if (errorMsg) {
              errorMsg.textContent = data.message || "Registration failed";
              errorMsg.classList.remove("hidden");
            }
          }
        } catch (err) {
          console.error("🌐 Network error:", err);
        }
      });
    }
  }
}

