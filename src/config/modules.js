import { ENV_MODE, IP } from "./env/env"

export const IMAGE_PATH = IP + "/data/uploads"

export const API_URL = ENV_MODE == "dev" ? "http://localhost:8000" : IP