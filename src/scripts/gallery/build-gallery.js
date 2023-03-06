import ApiService from '../api/apiService';
import Render from '../render/render';

const apiService = new ApiService();
const render = new Render();

export default class Gallery {
  constructor() {
    this.dataItems = [];
    this.promises = [];
    this.itemsPerPage = 0;
    this.screenWidth = window.innerWidth;
  }

  // Отримуемо кількість елементів на сорінці в галереї в залежності від ширини екрана
  numberOfItemsPerPage() {
    if (this.screenWidth < 768) {
      return (this.itemsPerPage = 3);
    } else if (this.screenWidth >= 768 && this.screenWidth < 1280) {
      return (this.itemsPerPage = 6);
    } else if (this.screenWidth > 1280) {
      return (this.itemsPerPage = 9);
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
    return (this.promises = Promise.all(promises).catch(error =>
      console.log(error)
    ));
  }

  // Отримуємо рандомні данні з рандомними коктейлями
  async getRandomData() {
    const promises = this.promises;
    const data = await this.allPromises(promises);
    const flatData = data.flatMap(i => i);
    console.log('flatData: ', flatData);
    render.renderGallery(flatData);
  }

  // Будуємо розмітку в залежності від кількості елементів на стр.
  async getDataByName(data) {
    const allNames = await apiService.fetchDataByName(data);
    for (let i = 0; i < this.itemsPerPage; i += 1) {
      this.dataItems.push(allNames[i]);
    }
    render.renderGallery(this.dataItems);
  }
}
