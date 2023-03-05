import ApiService from "./api/apiService";
import Render from "./render/render";

const apiService = new ApiService;
const render = new Render;
const screenWidth = window.innerWidth;

class Gallery {
    constructor() {
        this.promises = [];
        this.itemsPerPage = 0;
    }

    // Отримуемо кількість елементів на сорінці в галереї в залежності від ширини екрана 
    numberOfItemsPerPage(screenWidth) {
        console.log('screenWidth: ', screenWidth);
        if (screenWidth < 768) {
            return this.itemsPerPage = 3;
        } else if (screenWidth >= 768 && screenWidth < 1280) {
            return this.itemsPerPage = 6;
        } else if (screenWidth > 1280) {
            return this.itemsPerPage = 9;
        }
    }

    // Генеруємо проміси рандомних коктейлів в залежності від кількості на стр.
    randomCoctails() {
        for (let i = 0; i < this.itemsPerPage; i += 1) {
            this.promises.push(apiService.fetchRandomData());
        }
        return this.promises;
    }

    // Чекаємо виконання всіх промісів з рандомними коктейлями
    allPromises(promises) {
        return this.promises = Promise.all(promises)
            .catch(error => console.log(error));
    }

    // Отримуємо рандомні данні з рандомними коктейлями
    async getRandomData() {
        const promises = this.promises;
        const data = await this.allPromises(promises);
        const flatData = data.flatMap(i => i);
        console.log('flatData: ', flatData);
        render.renderGallery(flatData);
    }
}

const gallery = new Gallery;
gallery.numberOfItemsPerPage(screenWidth);
gallery.randomCoctails();
gallery.getRandomData();
