import axios from "axios";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export default class ApiService {
    // Отримуємо дані з сервера
    async fetchRandomData() {
        const { data } = await axios.get(`${BASE_URL}random.php`);
        const response = data.drinks;
        return response;
    }
}