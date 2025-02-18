import { fetchAPI } from "../utils/FetchApi";

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export class UserService {
  static async getAll() {
    return await fetchAPI(API_URL_BASE + "/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  }
}