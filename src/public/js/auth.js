const auth = (() => {
    const API_BASE = "http://localhost:5000/api"; // Adjust to your Node.js backend
  
    // Attempt login
    async function login(email, password) {
      try {
        const res = await fetch(`${API_BASE}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        if (!res.ok) {
          return false; // login failed
        }
        const data = await res.json();
        // save token in localStorage
        localStorage.setItem('token', data.token);
        return true;
      } catch (err) {
        console.error("Login error:", err);
        return false;
      }
    }
  
    function getToken() {
      return localStorage.getItem('token');
    }
  
    function isLoggedIn() {
      return Boolean(getToken());
    }
  
    function logout() {
      localStorage.removeItem('token');
    }
  
    return { login, getToken, isLoggedIn, logout };
  })();
  