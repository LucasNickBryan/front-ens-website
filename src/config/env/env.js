const ENV_MODE = "prod"

const IP = "http://192.168.88.4:3000"

export const IMAGE_PATH = IP + "/data/uploads"

export const API_URL = ENV_MODE === "dev" ? "http://localhost:8000" : IP