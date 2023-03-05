import axios from "axios";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
'www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552'

export default class ApiService {
    // Отримуємо дані з сервера
    async fetchRandomData() {
        const { data } = await axios.get(`${BASE_URL}random.php`);
        const response = data.drinks;
        return response;
    }
    async fetchDataByName(query) {
        const { data } = await axios.get(`${BASE_URL}search.php?s=${query}`);
        const response = data.drinks;
        console.log(response);
        return response;
    }
    async fetchDataById(id) {
        const { data } = await axios.get(`${BASE_URL}lookup.php?iid=${id}`);
        const response = data.drinks;
        console.log(response);
        return response;
    }
}