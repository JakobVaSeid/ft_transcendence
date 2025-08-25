var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function renderRegister() {
    const container = document.getElementById("app");
    const template = document.getElementById("register-template");
    ``;
    if (container && template) {
        const clone = template.content.cloneNode(true);
        container.innerHTML = "";
        container.appendChild(clone);
        const registerForm = document.getElementById("login-form");
        if (registerForm) {
            registerForm.addEventListener("submit", (e) => __awaiter(this, void 0, void 0, function* () {
                e.preventDefault();
                const emailInput = document.getElementById("email");
                const passwordInput = document.getElementById("password");
                const username = document.getElementById("username");
                if (!emailInput || !passwordInput)
                    return;
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                if (!email || !password) {
                    console.error("❌ Missing credentials");
                    return;
                }
                try {
                    const response = yield fetch("/api/auth/register", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        body: JSON.stringify({ email, password, username }),
                    });
                    const data = yield response.json();
                    if (response.ok) {
                        console.log("✅ Registration successful:", data);
                        // After register, you might auto-login OR redirect to login
                        window.location.hash = "#/login";
                    }
                    else {
                        console.error("❌ Registration failed:", data.message || "Unknown error");
                        const errorMsg = document.getElementById("error-message");
                        if (errorMsg) {
                            errorMsg.textContent = data.message || "Registration failed";
                            errorMsg.classList.remove("hidden");
                        }
                    }
                }
                catch (err) {
                    console.error("🌐 Network error:", err);
                }
            }));
        }
    }
}
