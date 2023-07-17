const ENV_MODE = "dev"
export const API_URL = ENV_MODE === "dev" ? "http://localhost:8000" : "http://192.168.137.1:3000"