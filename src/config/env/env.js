const ENV_MODE = "dev";

const IP = "http://192.168.88.101:3000";

export const IMAGE_PATH = IP + "/data/uploads";

export const API_URL = ENV_MODE === "ter" ? "http://localhost:8000" : IP;
