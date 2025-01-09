const configAPI = (() => {
    const API_BASE = "http://localhost:5000/api";
  
    async function fetchConfig() {
      const token = auth.getToken();
      const res = await fetch(`${API_BASE}/config`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!res.ok) {
        throw new Error("Failed to fetch user config");
      }
      return res.json();
    }
  
    async function updateConfig(configKey, configValue) {
      const token = auth.getToken();
      const res = await fetch(`${API_BASE}/config`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ configKey, configValue })
      });
      if (!res.ok) {
        throw new Error("Failed to update user config");
      }
    }
  
    return { fetchConfig, updateConfig };
  })();
  