const ENV_MODE = "test"

const IP = "http://192.168.137.1:3000"

export const IMAGE_PATH = IP + "/data/uploads"

export const API_URL = ENV_MODE === "dev" ? "http://localhost:8000" : IP