import env from "react-dotenv";

export const IMAGE_PATH = env.IP + "/data/uploads"

export const API_URL = env.ENV_MODE == "dev" ? "http://localhost:8000" : env.IP